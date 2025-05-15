
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useToast } from '@/hooks/use-toast';
import { FileUpload, FileText, Check, AlertCircle, Volume2, Languages } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useLanguage } from '@/contexts/LanguageContext';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';

interface Document {
  id: string;
  name: string;
  size: string;
  type: string;
  uploadDate: string;
  status: 'processing' | 'completed' | 'error';
  summary?: string;
}

export default function DocumentUpload() {
  const { toast } = useToast();
  const { t, language } = useLanguage();
  
  const [documents, setDocuments] = useState<Document[]>([]);
  const [isKycVerified, setIsKycVerified] = useState(false);
  const [kycStep, setKycStep] = useState(1);
  const [aadharNumber, setAadharNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [translateToLanguage, setTranslateToLanguage] = useState(language);
  const [enableTTS, setEnableTTS] = useState(false);
  
  // Fake KYC verification
  const handleVerifyAadhar = () => {
    if (aadharNumber.length === 12 && /^\d+$/.test(aadharNumber)) {
      toast({
        title: "OTP Sent",
        description: "A one-time password has been sent to your registered mobile number",
      });
      setKycStep(2);
    } else {
      toast({
        title: "Invalid Aadhaar",
        description: "Please enter a valid 12-digit Aadhaar number",
        variant: "destructive",
      });
    }
  };
  
  const handleVerifyOtp = () => {
    if (otp.length === 6 && /^\d+$/.test(otp)) {
      toast({
        title: "Verification Successful",
        description: "Your identity has been verified successfully",
      });
      setIsKycVerified(true);
    } else {
      toast({
        title: "Invalid OTP",
        description: "Please enter a valid 6-digit OTP",
        variant: "destructive",
      });
    }
  };
  
  // File upload handling
  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isKycVerified) {
      toast({
        title: "KYC Required",
        description: "Please complete KYC verification before uploading documents",
        variant: "destructive",
      });
      return;
    }
    
    const files = event.target.files;
    if (!files || files.length === 0) return;
    
    // Process each file
    Array.from(files).forEach(file => {
      // Create new document entry
      const newDoc: Document = {
        id: Math.random().toString(36).substring(2, 9),
        name: file.name,
        size: formatFileSize(file.size),
        type: file.type.split('/')[1].toUpperCase(),
        uploadDate: new Date().toLocaleDateString(),
        status: 'processing'
      };
      
      setDocuments(prev => [...prev, newDoc]);
      
      // Simulate processing
      toast({
        title: "Document Uploaded",
        description: `${file.name} is being processed`,
      });
      
      // Simulate document processing delay
      setTimeout(() => {
        setDocuments(prev => 
          prev.map(doc => 
            doc.id === newDoc.id 
              ? { 
                  ...doc, 
                  status: 'completed',
                  summary: "This document appears to be a legal agreement regarding property transfer. Key points include the property address, transaction amount, and terms of payment. There are clauses regarding maintenance responsibilities and utility transfers."
                } 
              : doc
          )
        );
        
        toast({
          title: "Processing Complete",
          description: `${file.name} has been processed successfully`,
        });
      }, 3000);
    });
    
    // Reset file input
    event.target.value = '';
  };
  
  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' bytes';
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    else return (bytes / 1048576).toFixed(1) + ' MB';
  };
  
  const playAudio = (docName: string) => {
    toast({
      title: "Text-to-Speech",
      description: `Playing audio for ${docName}`,
    });
  };
  
  return (
    <div className="space-y-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold mb-2">Document Management</h2>
        <p className="text-muted-foreground">Upload and manage your legal documents securely</p>
      </div>
      
      <Tabs defaultValue={isKycVerified ? "documents" : "kyc"}>
        <TabsList className="grid grid-cols-2 mb-6">
          <TabsTrigger value="kyc" disabled={isKycVerified}>
            <div className="flex items-center gap-2">
              <Check size={18} className={isKycVerified ? "text-green-500" : "text-muted-foreground"} />
              <span>KYC Verification</span>
            </div>
          </TabsTrigger>
          <TabsTrigger value="documents" disabled={!isKycVerified}>
            <div className="flex items-center gap-2">
              <FileText size={18} />
              <span>Documents</span>
            </div>
          </TabsTrigger>
        </TabsList>
        
        {/* KYC Verification Tab */}
        <TabsContent value="kyc">
          <Card>
            <CardHeader>
              <CardTitle>Identity Verification</CardTitle>
              <CardDescription>
                Verify your identity using Aadhaar before uploading sensitive documents
              </CardDescription>
            </CardHeader>
            <CardContent>
              {kycStep === 1 ? (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="aadhaar">Aadhaar Number</Label>
                    <Input
                      id="aadhaar"
                      placeholder="Enter 12-digit Aadhaar number"
                      value={aadharNumber}
                      onChange={(e) => setAadharNumber(e.target.value.replace(/\D/g, '').slice(0, 12))}
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="consent" className="rounded" />
                    <Label htmlFor="consent">
                      I consent to Aadhaar verification as per UIDAI guidelines
                    </Label>
                  </div>
                  
                  <Button onClick={handleVerifyAadhar} className="w-full mt-4">
                    Send OTP
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="otp">Enter OTP</Label>
                    <Input
                      id="otp"
                      placeholder="Enter 6-digit OTP"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    />
                    <p className="text-sm text-muted-foreground">
                      OTP sent to phone number ending with ******{Math.floor(Math.random() * 10000).toString().padStart(4, '0')}
                    </p>
                  </div>
                  
                  <div className="flex justify-between">
                    <Button variant="outline" onClick={() => setKycStep(1)}>
                      Back
                    </Button>
                    <Button onClick={handleVerifyOtp}>
                      Verify OTP
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Documents Tab */}
        <TabsContent value="documents">
          <div className="space-y-6">
            {/* Upload section */}
            <Card>
              <CardHeader>
                <CardTitle>Upload Documents</CardTitle>
                <CardDescription>
                  Upload legal documents for automatic analysis and summary
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="border-2 border-dashed rounded-lg p-8 text-center">
                    <FileUpload className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
                    <h3 className="font-medium mb-2">Drag and drop files here</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Supports PDF, DOC, DOCX, JPG, PNG (Max 10MB)
                    </p>
                    <Button 
                      disabled={!isKycVerified}
                      onClick={() => document.getElementById('file-upload')?.click()}
                    >
                      Select Files
                    </Button>
                    <input 
                      type="file" 
                      id="file-upload" 
                      className="hidden" 
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" 
                      multiple 
                      onChange={handleFileUpload}
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Languages size={18} />
                        <Label>Translation</Label>
                      </div>
                      <Select value={translateToLanguage} onValueChange={setTranslateToLanguage}>
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Select language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="hi">Hindi</SelectItem>
                          <SelectItem value="ta">Tamil</SelectItem>
                          <SelectItem value="te">Telugu</SelectItem>
                          <SelectItem value="bn">Bengali</SelectItem>
                          <SelectItem value="mr">Marathi</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Volume2 size={18} />
                        <Label>Text-to-Speech</Label>
                      </div>
                      <Switch checked={enableTTS} onCheckedChange={setEnableTTS} />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Document list */}
            <div>
              <h3 className="text-lg font-medium mb-4">Your Documents</h3>
              
              {documents.length === 0 ? (
                <div className="text-center py-12 bg-muted rounded-lg">
                  <FileText className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">No documents uploaded yet</p>
                  <Button 
                    variant="outline" 
                    className="mt-4"
                    onClick={() => document.getElementById('file-upload')?.click()}
                  >
                    Upload your first document
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {documents.map(doc => (
                    <Card key={doc.id}>
                      <CardContent className="p-6">
                        <div className="flex flex-col md:flex-row gap-4">
                          <div className="flex-shrink-0 bg-muted p-4 rounded-lg flex items-center justify-center">
                            <FileText size={32} />
                          </div>
                          
                          <div className="flex-1">
                            <div className="flex flex-wrap justify-between gap-2 mb-2">
                              <h3 className="font-bold text-lg">{doc.name}</h3>
                              <Badge 
                                variant={
                                  doc.status === 'completed' ? 'default' :
                                  doc.status === 'processing' ? 'outline' : 'destructive'
                                }
                              >
                                {doc.status === 'completed' ? 'Processed' :
                                 doc.status === 'processing' ? 'Processing...' : 'Error'}
                              </Badge>
                            </div>
                            
                            <div className="flex gap-4 text-sm text-muted-foreground mb-3">
                              <span>{doc.type}</span>
                              <span>{doc.size}</span>
                              <span>Uploaded: {doc.uploadDate}</span>
                            </div>
                            
                            {doc.status === 'completed' && doc.summary && (
                              <>
                                <Separator className="my-3" />
                                <div className="mt-3">
                                  <h4 className="font-medium mb-1">Document Summary:</h4>
                                  <p className="text-muted-foreground">{doc.summary}</p>
                                </div>
                                
                                <div className="mt-4 flex flex-wrap gap-2">
                                  <Button 
                                    variant="outline" 
                                    size="sm" 
                                    className="flex items-center gap-1"
                                    onClick={() => playAudio(doc.name)}
                                  >
                                    <Volume2 size={16} />
                                    <span>Listen</span>
                                  </Button>
                                  
                                  <Button 
                                    variant="outline" 
                                    size="sm"
                                  >
                                    <Languages size={16} className="mr-1" />
                                    <span>View Translation</span>
                                  </Button>
                                </div>
                              </>
                            )}
                            
                            {doc.status === 'processing' && (
                              <div className="flex items-center gap-2 text-muted-foreground">
                                <div className="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full"></div>
                                <span>Analyzing document content...</span>
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
