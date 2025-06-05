
import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Small Business Owner",
      location: "Mumbai, Maharashtra",
      rating: 5,
      content: "Mediation saved my business partnership. What could have been a lengthy court battle was resolved in just 3 sessions. The mediator helped us understand each other's concerns and find a fair solution.",
      avatar: "RK"
    },
    {
      name: "Dr. Priya Sharma",
      role: "Healthcare Professional",
      location: "Bangalore, Karnataka",
      rating: 5,
      content: "The property dispute with my neighbor was resolved peacefully through mediation. The process was respectful, confidential, and much faster than I expected. Highly recommend this approach.",
      avatar: "PS"
    },
    {
      name: "Amit Patel",
      role: "Tech Entrepreneur",
      location: "Pune, Maharashtra",
      rating: 5,
      content: "As someone who's dealt with commercial disputes before, mediation was a game-changer. The platform made it easy to find the right mediator, and the entire process was transparent and efficient.",
      avatar: "AP"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from people who chose mediation. See how peaceful resolution 
            transformed their disputes into positive outcomes.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 relative">
              <Quote className="h-8 w-8 text-orange-200 mb-4" />
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-600 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <span className="text-blue-600 font-bold">{testimonial.avatar}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl p-6 border border-blue-100 inline-block">
            <p className="text-gray-600 mb-2">Join the mediation community</p>
            <p className="text-2xl font-bold text-blue-600">15,000+ satisfied users</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
