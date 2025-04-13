
import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InternshipCard from "@/components/InternshipCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Card } from "@/components/ui/card";
import { internships } from "@/data/internships";
import { Internship } from "@/types";
import { useAnimation } from "@/hooks/use-animation";

const SearchInternships = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Internship[]>([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  
  const titleRef = useAnimation();
  const searchFormRef = useAnimation();
  const resultsRef = useAnimation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSearching(true);
    
    // Simulate search delay for smoother animations
    setTimeout(() => {
      if (searchQuery.trim() === "") {
        setSearchResults([]);
        setHasSearched(false);
        setIsSearching(false);
        return;
      }
      
      const query = searchQuery.toLowerCase();
      const results = internships.filter(internship => 
        internship.title.toLowerCase().includes(query) ||
        internship.company.toLowerCase().includes(query) ||
        internship.domain.toLowerCase().includes(query) ||
        internship.location.toLowerCase().includes(query) ||
        internship.description?.toLowerCase().includes(query)
      );
      
      setSearchResults(results);
      setHasSearched(true);
      setIsSearching(false);
    }, 500);
  };

  useEffect(() => {
    // Reset search when query is cleared
    if (searchQuery === "") {
      setSearchResults([]);
      setHasSearched(false);
    }
  }, [searchQuery]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Search Header */}
        <section className="bg-intern-bg-light py-12">
          <div className="container mx-auto px-4">
            <h1 
              ref={titleRef}
              className="opacity-0 text-4xl font-bold text-center text-gray-900 mb-4"
            >
              Search Internships
            </h1>
            <p 
              className="opacity-0 text-lg text-center text-gray-600 max-w-2xl mx-auto animate-fade-in"
              style={{ animationDelay: '0.2s' }}
            >
              Find the perfect internship opportunity that matches your skills and interests
            </p>
          </div>
        </section>
        
        {/* Search Form */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card 
              ref={searchFormRef}
              className="opacity-0 border-intern-card-border p-6 hover:shadow-md transition-shadow duration-300"
            >
              <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  <Input
                    placeholder="Search by keywords, title, company, or domain..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button 
                  type="submit"
                  className="bg-intern-purple hover:bg-intern-dark-purple text-white px-8 transition-transform duration-300 hover:scale-105 active:scale-95 disabled:opacity-70"
                  disabled={isSearching}
                >
                  {isSearching ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Searching...
                    </>
                  ) : 'Search'}
                </Button>
              </form>
            </Card>
          </div>
        </section>
        
        {/* Search Results */}
        <section className="py-16 bg-intern-bg-light" ref={resultsRef}>
          <div className="container mx-auto px-4">
            {hasSearched && !isSearching && (
              <h2 className="opacity-0 text-2xl font-bold text-gray-900 mb-8 animate-fade-in">
                {searchResults.length > 0 
                  ? `Search Results (${searchResults.length})`
                  : "No internships found matching your search"
                }
              </h2>
            )}
            
            {isSearching && (
              <div className="flex flex-col items-center justify-center py-12">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-intern-purple mb-4"></div>
                <p className="text-gray-600">Searching internships...</p>
              </div>
            )}
            
            {!isSearching && searchResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {searchResults.map((internship, index) => (
                  <InternshipCard 
                    key={internship.id} 
                    internship={internship} 
                    delay={index % 3}
                  />
                ))}
              </div>
            ) : !isSearching && hasSearched && (
              <div className="opacity-0 text-center py-16 bg-white border border-intern-card-border rounded-lg max-w-2xl mx-auto animate-scale-in">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-16 w-16 mx-auto text-gray-400 mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <h3 className="text-xl font-medium text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-600">Try using different keywords or filters.</p>
              </div>
            )}
            
            {!hasSearched && !isSearching && (
              <div className="text-center py-8">
                <p className="text-gray-600">Enter keywords above to search for internships</p>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default SearchInternships;
