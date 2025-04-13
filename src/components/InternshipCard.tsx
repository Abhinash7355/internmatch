
import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Internship } from "../types";
import { Link } from "react-router-dom";

interface InternshipCardProps {
  internship: Internship;
}

const InternshipCard: React.FC<InternshipCardProps> = ({ internship }) => {
  return (
    <Card className="overflow-hidden border border-intern-card-border hover:border-intern-light-purple transition-colors duration-300 h-full flex flex-col">
      <CardContent className="pt-6 pb-2 px-6 flex-1">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center">
            <div className="h-10 w-10 bg-gray-100 rounded-md flex items-center justify-center mr-3">
              {internship.logo ? (
                <img 
                  src={internship.logo} 
                  alt={internship.company} 
                  className="h-8 w-8 object-contain" 
                />
              ) : (
                <span className="text-lg font-bold text-intern-purple">
                  {internship.company.charAt(0)}
                </span>
              )}
            </div>
            <div>
              <h3 className="font-semibold text-lg text-gray-900">{internship.title}</h3>
              <p className="text-sm text-gray-600">{internship.company}</p>
            </div>
          </div>
          {internship.featured && (
            <Badge className="bg-intern-purple text-white">Featured</Badge>
          )}
        </div>
        
        <div className="space-y-3 mb-4">
          <div className="flex items-center text-sm">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="mr-2 text-intern-purple"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span>{internship.location}</span>
          </div>
          
          <div className="flex items-center text-sm">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="mr-2 text-intern-purple"
            >
              <rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect>
              <line x1="16" x2="16" y1="2" y2="6"></line>
              <line x1="8" x2="8" y1="2" y2="6"></line>
              <line x1="3" x2="21" y1="10" y2="10"></line>
            </svg>
            <span>{internship.duration}</span>
          </div>
          
          <div className="flex items-center text-sm">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="mr-2 text-intern-purple"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
            <span>{internship.domain}</span>
          </div>
          
          <div className="flex items-center text-sm">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="mr-2 text-intern-purple"
            >
              <path d="M6 2L2 6v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6l-4-4Z"></path>
              <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
              <path d="M8 13h2"></path>
              <path d="M14 13h2"></path>
              <path d="M8 17h2"></path>
              <path d="M14 17h2"></path>
            </svg>
            <span>{internship.eligibility}</span>
          </div>

          <div className="flex items-center text-sm">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="mr-2 text-intern-purple"
            >
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
            <span className="font-medium">{internship.stipend}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-0 pb-6 px-6 flex flex-col sm:flex-row gap-3">
        <Button 
          className="bg-intern-purple hover:bg-intern-dark-purple text-white w-full sm:w-auto"
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
          className="border-intern-purple text-intern-purple hover:bg-intern-purple hover:text-white w-full sm:w-auto"
          asChild
        >
          <Link to={`/internship/${internship.id}`}>
            View Details
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default InternshipCard;
