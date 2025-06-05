import axios from 'axios';

const SEARCH_URL = 'https://meity-auth.ulcacontrib.org/ulca/apis/v0/model/search';
const PIPELINE_URL = 'https://meity-auth.ulcacontrib.org/ulca/apis/v0/pipeline/compute/async';
const PIPELINE_STATUS_URL = 'https://meity-auth.ulcacontrib.org/ulca/apis/v0/pipeline/compute/status';

export interface TranslationRequest {
  text: string;
  sourceLang: string;
  targetLang: string;
}

export async function translateTextWithPipeline(request: TranslationRequest): Promise<string> {
  const apiKey = import.meta.env.VITE_BASHINI_API_KEY;

  try {
    // STEP 1: Search pipeline
    const searchRes = await axios.post(SEARCH_URL, {
      pipelineTasks: [
        {
          taskType: 'translation',
          config: {
            language: {
              sourceLanguage: request.sourceLang,
              targetLanguage: request.targetLang,
            },
          },
        },
      ],
    });

    const pipeline = searchRes.data?.[0]?.pipelineResponse?.[0];
    if (!pipeline) throw new Error('No pipeline found');

    const pipelineId = pipeline.pipelineInferenceAPI?.pipelineId;
    if (!pipelineId) throw new Error('Pipeline ID not found');

    // STEP 2: Call pipeline
    const pipelineRes = await axios.post(
      PIPELINE_URL,
      {
        pipelineTasks: [
          {
            taskType: 'translation',
            config: {
              language: {
                sourceLanguage: request.sourceLang,
                targetLanguage: request.targetLang,
              },
              serviceId: pipeline.pipelineInferenceAPI?.serviceId,
            },
          },
        ],
        input: [{ source: request.text }],
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
      }
    );

    const jobID = pipelineRes.data?.jobID;
    if (!jobID) throw new Error('Job ID not returned');

    // STEP 3: Poll status
    let translated = '';
    let tries = 0;
    while (tries < 10) {
      await new Promise((res) => setTimeout(res, 1000)); // 1s delay
      const statusRes = await axios.get(`${PIPELINE_STATUS_URL}/${jobID}`);
      const output = statusRes.data?.pipelineResponse?.[0]?.output?.[0]?.target;
      if (output) {
        translated = output;
        break;
      }
      tries++;
    }

    return translated || request.text;
  } catch (err) {
    console.error('Pipeline translation failed:', err);
    return request.text;
  }
}