
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ApplyPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Apply Header */}
        <section className="bg-intern-bg-light py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">Apply for Internship</h1>
            <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto">
              Complete the form below to submit your application for the selected internship opportunity
            </p>
          </div>
        </section>
        
        {/* Application Form */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-3xl">
            <Card className="border-intern-card-border">
              <CardContent className="pt-6">
                <form className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        placeholder="Enter your phone number"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="college" className="block text-sm font-medium text-gray-700 mb-1">
                        College/University
                      </label>
                      <Input
                        id="college"
                        placeholder="Enter your college or university name"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="degree" className="block text-sm font-medium text-gray-700 mb-1">
                        Degree & Branch
                      </label>
                      <Input
                        id="degree"
                        placeholder="e.g., B.Tech in Computer Science"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="year" className="block text-sm font-medium text-gray-700 mb-1">
                        Year of Study
                      </label>
                      <select 
                        id="year" 
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      >
                        <option value="">Select Year</option>
                        <option value="1">1st Year</option>
                        <option value="2">2nd Year</option>
                        <option value="3">3rd Year</option>
                        <option value="4">4th Year</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-1">
                        Resume/CV (PDF)
                      </label>
                      <Input
                        id="resume"
                        type="file"
                        className="w-full"
                        accept="application/pdf"
                      />
                    </div>

                    <div>
                      <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 mb-1">
                        Portfolio Link (optional)
                      </label>
                      <Input
                        id="portfolio"
                        placeholder="e.g., GitHub or personal website"
                        className="w-full"
                      />
                    </div>
                  </div>

                  <Button 
                    type="submit"
                    className="w-full bg-intern-purple hover:bg-intern-dark-purple text-white"
                  >
                    Submit Application
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
