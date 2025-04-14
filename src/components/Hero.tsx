
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-white to-purple-50 py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 animate-in">
          Find Your Perfect Tech Internship
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8 animate-in">
          Discover internship opportunities across various domains for B.Tech students. Apply directly with a single click.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-in">
          <Link to="/browse">
            <Button className="bg-intern-purple hover:bg-intern-dark-purple text-white px-8 py-6 rounded-md">
              Browse Internships
            </Button>
          </Link>
          <Link to="/about">
            <Button variant="outline" className="border-intern-purple text-intern-purple hover:bg-intern-purple hover:text-white px-8 py-6 rounded-md">
              Learn More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
