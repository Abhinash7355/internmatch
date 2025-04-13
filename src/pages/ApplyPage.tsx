
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAnimation } from "@/hooks/use-animation";
import { toast } from "@/components/ui/use-toast";

const ApplyPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    college: '',
    degree: '',
    year: '',
    resume: null as File | null,
    portfolio: ''
  });
  
  const titleRef = useAnimation();
  const formRef = useAnimation();
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFormData(prev => ({
        ...prev,
        resume: e.target.files![0]
      }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Application Submitted",
        description: "Your internship application has been received. We'll get back to you soon!",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        college: '',
        degree: '',
        year: '',
        resume: null,
        portfolio: ''
      });
      
      // Reset file input
      const fileInput = document.getElementById('resume') as HTMLInputElement;
      if (fileInput) fileInput.value = '';
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Apply Header */}
        <section className="bg-intern-bg-light py-12">
          <div className="container mx-auto px-4">
            <h1 
              ref={titleRef}
              className="opacity-0 text-4xl font-bold text-center text-gray-900 mb-4"
            >
              Apply for Internship
            </h1>
            <p 
              className="opacity-0 text-lg text-center text-gray-600 max-w-2xl mx-auto animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              Complete the form below to submit your application for the selected internship opportunity
            </p>
          </div>
        </section>
        
        {/* Application Form */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <Card 
              ref={formRef}
              className="opacity-0 border-intern-card-border hover:shadow-md transition-all duration-300"
            >
              <CardContent className="pt-6">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <Input
                          id="name"
                          placeholder="Enter your full name"
                          className="w-full"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Enter your email address"
                          className="w-full"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          placeholder="Enter your phone number"
                          className="w-full"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="college" className="block text-sm font-medium text-gray-700 mb-1">
                          College/University
                        </label>
                        <Input
                          id="college"
                          placeholder="Enter your college or university name"
                          className="w-full"
                          value={formData.college}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="degree" className="block text-sm font-medium text-gray-700 mb-1">
                          Degree & Branch
                        </label>
                        <Input
                          id="degree"
                          placeholder="e.g., B.Tech in Computer Science"
                          className="w-full"
                          value={formData.degree}
                          onChange={handleInputChange}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                          Year of Study
                        </label>
                        <select 
                          id="year" 
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                          value={formData.year}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="">Select Year</option>
                          <option value="1">1st Year</option>
                          <option value="2">2nd Year</option>
                          <option value="3">3rd Year</option>
                          <option value="4">4th Year</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                        Resume/CV (PDF)
                      </label>
                      <Input
                        id="resume"
                        type="file"
                        className="w-full"
                        accept="application/pdf"
                        onChange={handleFileChange}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 mb-1">
                        Portfolio Link (optional)
                      </label>
                      <Input
                        id="portfolio"
                        placeholder="e.g., GitHub or personal website"
                        className="w-full"
                        value={formData.portfolio}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-intern-purple hover:bg-intern-dark-purple text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting Application...
                      </>
                    ) : 'Submit Application'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ApplyPage;
