
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useAnimation } from "@/hooks/use-animation";

const Hero: React.FC = () => {
  const { ref: titleRef } = useAnimation();
  const { ref: descriptionRef } = useAnimation({ delay: 200 });
  const { ref: buttonsRef } = useAnimation({ delay: 400 });

  return (
    <section className="bg-gradient-to-br from-white to-purple-50 py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-purple-200 opacity-30 animate-pulse-soft"></div>
          <div className="absolute bottom-20 right-10 w-32 h-32 rounded-full bg-purple-300 opacity-20 animate-float"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 rounded-full bg-yellow-200 opacity-20 animate-pulse-soft" style={{ animationDelay: '1s' }}></div>
        </div>

        <h1 
          ref={titleRef}
          className="opacity-0 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6"
        >
          Find Your Perfect Tech Internship
        </h1>
        
        <p 
          ref={descriptionRef}
          className="opacity-0 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8"
        >
          Discover internship opportunities across various domains for B.Tech students. Apply directly with a single click.
        </p>
        
        <div 
          ref={buttonsRef}
          className="opacity-0 flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button 
            className="bg-intern-purple hover:bg-intern-dark-purple text-white px-6 py-3 sm:px-8 sm:py-6 rounded-md btn-hover transition-transform duration-300 hover:scale-105"
            asChild
          >
            <Link to="/browse">Browse Internships</Link>
          </Button>
          
          <Button 
            variant="outline" 
            className="border-intern-purple text-intern-purple hover:bg-intern-purple hover:text-white px-6 py-3 sm:px-8 sm:py-6 rounded-md btn-hover transition-transform duration-300 hover:scale-105"
            asChild
          >
            <Link to="/about">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
