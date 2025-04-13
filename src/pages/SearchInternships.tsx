
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InternshipCard from "@/components/InternshipCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { Card } from "@/components/ui/card";
import { internships } from "@/data/internships";
import { Internship } from "@/types";

const SearchInternships = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Internship[]>([]);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (searchQuery.trim() === "") {
      setSearchResults([]);
      setHasSearched(false);
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
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Search Header */}
        <section className="bg-intern-bg-light py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">Search Internships</h1>
            <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto">
              Find the perfect internship opportunity that matches your skills and interests
            </p>
          </div>
        </section>
        
        {/* Search Form */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card className="border-intern-card-border p-6">
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
                  className="bg-intern-purple hover:bg-intern-dark-purple text-white px-8"
                >
                  Search
                </Button>
              </form>
            </Card>
          </div>
        </section>
        
        {/* Search Results */}
        <section className="py-16 bg-intern-bg-light">
          <div className="container mx-auto px-4">
            {hasSearched && (
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                {searchResults.length > 0 
                  ? `Search Results (${searchResults.length})`
                  : "No internships found matching your search"
                }
              </h2>
            )}
            
            {searchResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {searchResults.map(internship => (
                  <InternshipCard key={internship.id} internship={internship} />
                ))}
              </div>
            ) : hasSearched && (
              <div className="text-center py-16 bg-white border border-intern-card-border rounded-lg max-w-2xl mx-auto">
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
            
            {!hasSearched && (
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
