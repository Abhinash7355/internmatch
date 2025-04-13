
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Award, BookOpen, Briefcase, Users } from "lucide-react";

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-intern-bg-light to-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About InternMatch</h1>
            <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
              Connecting talented B.Tech students with quality internship opportunities 
              to help launch successful careers in technology.
            </p>
          </div>
        </section>
        
        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 mb-6">
                  At InternMatch, we believe every B.Tech student deserves access to quality internships 
                  that align with their skills and career aspirations. We're dedicated to bridging the gap 
                  between talented students and innovative companies across various technology domains.
                </p>
                <p className="text-lg text-gray-700">
                  Our platform simplifies the internship search process, ensuring students can find and apply 
                  for opportunities that will provide them with valuable industry experience and kickstart 
                  their professional journeys.
                </p>
              </div>
              <div className="bg-soft-purple rounded-lg p-8">
                <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden bg-intern-purple bg-opacity-10 flex items-center justify-center">
                  <BookOpen size={120} className="text-intern-purple opacity-80" />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* What We Offer Section */}
        <section className="py-16 bg-intern-bg-light">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">What We Offer</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-intern-card-border flex flex-col items-center text-center">
                <div className="bg-soft-blue rounded-full p-4 mb-6">
                  <Briefcase className="h-8 w-8 text-ocean-blue" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Curated Opportunities</h3>
                <p className="text-gray-700">
                  We carefully select internships across various technology domains to ensure 
                  quality opportunities for all B.Tech specializations.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border border-intern-card-border flex flex-col items-center text-center">
                <div className="bg-soft-green rounded-full p-4 mb-6">
                  <Users className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Industry Connections</h3>
                <p className="text-gray-700">
                  Our platform partners with leading tech companies and startups to provide 
                  students with valuable industry exposure and networking opportunities.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border border-intern-card-border flex flex-col items-center text-center">
                <div className="bg-soft-peach rounded-full p-4 mb-6">
                  <Award className="h-8 w-8 text-bright-orange" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Skill Development</h3>
                <p className="text-gray-700">
                  We focus on internships that offer genuine learning experiences, helping students 
                  develop practical skills that complement their academic knowledge.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-intern-card-border flex flex-col items-center text-center">
                  <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 overflow-hidden">
                    <div className="w-full h-full bg-intern-purple bg-opacity-20 flex items-center justify-center">
                      <span className="text-3xl text-intern-purple">TM</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Team Member {i}</h3>
                  <p className="text-intern-purple mb-4">Co-founder</p>
                  <p className="text-gray-700 text-sm">
                    Passionate about connecting students with opportunities that launch their careers.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="py-16 bg-intern-bg-light">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
              Have questions or want to partner with us? We'd love to hear from you!
            </p>
            <a 
              href="mailto:contact@internmatch.com" 
              className="inline-block bg-intern-purple hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutUs;
