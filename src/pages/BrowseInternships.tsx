
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import InternshipCard from "@/components/InternshipCard";
import DomainFilter from "@/components/DomainFilter";
import Footer from "@/components/Footer";
import { internships } from "@/data/internships";

const BrowseInternships = () => {
  const [selectedDomain, setSelectedDomain] = useState("All Domains");
  
  // Filter internships based on selected domain
  const filteredInternships = selectedDomain === "All Domains"
    ? internships
    : internships.filter(internship => internship.domain === selectedDomain);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Browse Internships Header */}
        <section className="bg-intern-bg-light py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">Browse Internships</h1>
            <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto">
              Discover a wide range of internship opportunities across various tech domains
            </p>
          </div>
        </section>
        
        {/* All Internships Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 md:mb-0">
                Available Internships
              </h2>
              
              <DomainFilter 
                selectedDomain={selectedDomain} 
                setSelectedDomain={setSelectedDomain} 
              />
            </div>
            
            {filteredInternships.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredInternships.map(internship => (
                  <InternshipCard key={internship.id} internship={internship} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-white border border-intern-card-border rounded-lg">
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
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BrowseInternships;
