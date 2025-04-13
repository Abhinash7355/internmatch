
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { internships } from "@/data/internships";
import { Internship } from "@/types";

const InternshipDetails = () => {
  const { id } = useParams();
  const [internship, setInternship] = useState<Internship | null>(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate API fetch with a small timeout
    const timer = setTimeout(() => {
      const foundInternship = internships.find(item => item.id === id);
      setInternship(foundInternship || null);
      setLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [id]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-8 w-48 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 w-24 bg-gray-200 rounded"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  if (!internship) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex flex-col items-center justify-center p-4">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-16 w-16 text-gray-400 mb-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M9 16h6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Internship Not Found</h1>
          <p className="text-gray-600 mb-8">The internship you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/">Go Back to Homepage</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Breadcrumb */}
        <div className="bg-intern-bg-light py-4 border-b border-intern-card-border">
          <div className="container mx-auto px-4">
            <div className="flex text-sm">
              <Link to="/" className="text-intern-purple hover:underline">Home</Link>
              <span className="mx-2 text-gray-500">/</span>
              <span className="text-gray-700">Internship Details</span>
            </div>
          </div>
        </div>
        
        {/* Internship Header */}
        <div className="bg-white border-b border-intern-card-border">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <div className="h-16 w-16 bg-gray-100 rounded-md flex items-center justify-center mr-4">
                  {internship.logo ? (
                    <img 
                      src={internship.logo} 
                      alt={internship.company} 
                      className="h-12 w-12 object-contain" 
                    />
                  ) : (
                    <span className="text-2xl font-bold text-intern-purple">
                      {internship.company.charAt(0)}
                    </span>
                  )}
                </div>
                
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-900">{internship.title}</h1>
                  <div className="flex items-center">
                    <span className="text-gray-700">{internship.company}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-gray-700">{internship.location}</span>
                    {internship.featured && (
                      <>
                        <span className="mx-2 text-gray-400">•</span>
                        <Badge className="bg-intern-purple text-white">Featured</Badge>
                      </>
                    )}
                  </div>
                </div>
              </div>
              
              <Button 
                className="bg-intern-purple hover:bg-intern-dark-purple text-white"
                asChild
              >
                <a 
                  href={internship.applicationUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Apply Now
                </a>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Internship Details */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-2">
              <div className="bg-white border border-intern-card-border rounded-lg p-6 mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Internship Description</h2>
                <p className="text-gray-700 mb-6">{internship.description}</p>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Responsibilities:</h3>
                <ul className="list-disc pl-5 text-gray-700 mb-6 space-y-2">
                  <li>Work closely with senior developers to design and implement new features</li>
                  <li>Write clean, maintainable, and efficient code</li>
                  <li>Troubleshoot and debug applications</li>
                  <li>Participate in code reviews and team meetings</li>
                  <li>Learn and adapt to new technologies and methodologies</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Requirements:</h3>
                <ul className="list-disc pl-5 text-gray-700 mb-6 space-y-2">
                  <li>Currently pursuing B.Tech degree in {internship.domain === "UI/UX Design" ? "any branch" : "Computer Science or related field"}</li>
                  <li>Basic knowledge of programming concepts and data structures</li>
                  <li>Willingness to learn and grow in a fast-paced environment</li>
                  <li>Good communication and teamwork skills</li>
                  <li>Problem-solving abilities and attention to detail</li>
                </ul>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Benefits:</h3>
                <ul className="list-disc pl-5 text-gray-700 mb-6 space-y-2">
                  <li>Competitive stipend of {internship.stipend}</li>
                  <li>Flexible working hours and remote work options</li>
                  <li>Mentorship from industry experts</li>
                  <li>Opportunity to work on real-world projects</li>
                  <li>Certificate of completion</li>
                  <li>Possibility of pre-placement offer for outstanding performers</li>
                </ul>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <Button 
                    className="bg-intern-purple hover:bg-intern-dark-purple text-white"
                    asChild
                  >
                    <a 
                      href={internship.applicationUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Apply Now
                    </a>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    className="border-intern-purple text-intern-purple hover:bg-intern-purple hover:text-white"
                    asChild
                  >
                    <Link to="/">
                      Browse More Internships
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div>
              <div className="bg-white border border-intern-card-border rounded-lg p-6 mb-6 sticky top-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Internship Overview</h3>
                
                <div className="space-y-4">
                  <div>
                    <span className="text-gray-600 text-sm">Domain</span>
                    <p className="font-medium text-gray-900">{internship.domain}</p>
                  </div>
                  
                  <div>
                    <span className="text-gray-600 text-sm">Duration</span>
                    <p className="font-medium text-gray-900">{internship.duration}</p>
                  </div>
                  
                  <div>
                    <span className="text-gray-600 text-sm">Location</span>
                    <p className="font-medium text-gray-900">{internship.location}</p>
                  </div>
                  
                  <div>
                    <span className="text-gray-600 text-sm">Stipend</span>
                    <p className="font-medium text-gray-900">{internship.stipend}</p>
                  </div>
                  
                  <div>
                    <span className="text-gray-600 text-sm">Eligibility</span>
                    <p className="font-medium text-gray-900">{internship.eligibility}</p>
                  </div>
                  
                  <div>
                    <span className="text-gray-600 text-sm">Application Deadline</span>
                    <p className="font-medium text-gray-900">Open until filled</p>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <Button className="w-full bg-intern-purple hover:bg-intern-dark-purple text-white" asChild>
                    <a 
                      href={internship.applicationUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Apply Now
                    </a>
                  </Button>
                </div>
              </div>
              
              <div className="bg-intern-purple bg-opacity-10 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Share This Internship</h3>
                <p className="text-gray-700 text-sm mb-4">Help your friends find this opportunity</p>
                
                <div className="flex space-x-4">
                  <a href="#" className="text-intern-purple hover:text-intern-dark-purple">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a href="#" className="text-intern-purple hover:text-intern-dark-purple">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="#" className="text-intern-purple hover:text-intern-dark-purple">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                      className="h-6 w-6"
                    >
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                  <a href="#" className="text-intern-purple hover:text-intern-dark-purple">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default InternshipDetails;
