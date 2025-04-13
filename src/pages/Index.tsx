
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InternshipCard from "@/components/InternshipCard";
import DomainFilter from "@/components/DomainFilter";
import TestimonialSection from "@/components/TestimonialSection";
import Footer from "@/components/Footer";
import { internships, testimonials } from "@/data/internships";
import { useAnimation } from "@/hooks/use-animation";

const Index = () => {
  const [selectedDomain, setSelectedDomain] = useState("All Domains");
  const [isLoaded, setIsLoaded] = useState(false);
  
  const featuredHeadingRef = useAnimation();
  const allInternshipsHeadingRef = useAnimation();
  const filterRef = useAnimation();
  
  // Filter internships based on selected domain
  const filteredInternships = selectedDomain === "All Domains"
    ? internships
    : internships.filter(internship => internship.domain === selectedDomain);
  
  // Featured internships
  const featuredInternships = internships.filter(internship => internship.featured);

  useEffect(() => {
    // Simulate loading for smooth animations
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />
        
        {/* Featured Internships Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 
              ref={featuredHeadingRef}
              className="opacity-0 text-3xl font-bold text-center text-gray-900 mb-12"
            >
              Featured Internships
            </h2>
            
            {isLoaded ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredInternships.map((internship, index) => (
                  <InternshipCard 
                    key={internship.id} 
                    internship={internship}
                    delay={index % 3} 
                  />
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3].map((_, index) => (
                  <div 
                    key={index} 
                    className="h-[400px] rounded-lg bg-gray-100 animate-pulse"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  ></div>
                ))}
              </div>
            )}
          </div>
        </section>
        
        {/* All Internships Section */}
        <section className="py-16 bg-intern-bg-light">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <h2 
                ref={allInternshipsHeadingRef}
                className="opacity-0 text-3xl font-bold text-gray-900 mb-4 md:mb-0"
              >
                All Internships
              </h2>
              
              <div ref={filterRef} className="opacity-0 w-full md:w-auto">
                <DomainFilter 
                  selectedDomain={selectedDomain} 
                  setSelectedDomain={setSelectedDomain} 
                />
              </div>
            </div>
            
            {isLoaded && filteredInternships.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredInternships.map((internship, index) => (
                  <InternshipCard 
                    key={internship.id} 
                    internship={internship}
                    delay={index % 3} 
                  />
                ))}
              </div>
            ) : isLoaded && (
              <div className="text-center py-16 bg-white border border-intern-card-border rounded-lg animate-scale-in">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-12 w-12 mx-auto text-gray-400 mb-4"
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
                <h3 className="text-xl font-medium text-gray-900 mb-2">No internships found</h3>
                <p className="text-gray-600">Try selecting a different domain filter.</p>
              </div>
            )}
            
            {/* Loading skeleton */}
            {!isLoaded && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[1, 2, 3, 4, 5, 6].map((_, index) => (
                  <div 
                    key={index} 
                    className="h-[400px] rounded-lg bg-gray-100 animate-pulse"
                    style={{ animationDelay: `${index * 0.15}s` }}
                  ></div>
                ))}
              </div>
            )}
          </div>
        </section>
        
        {/* Testimonials Section */}
        <TestimonialSection testimonials={testimonials} />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
