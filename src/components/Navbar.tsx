
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { X, Menu, Search } from "lucide-react";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="w-full bg-white border-b border-intern-card-border shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-intern-purple rounded-md p-1">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="white" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
            </svg>
          </div>
          <span className="text-xl font-bold text-gray-900">InternMatch</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-intern-purple font-medium">
            Home
          </Link>
          <Link to="/browse" className="text-gray-700 hover:text-intern-purple font-medium">
            Browse Internships
          </Link>
          <Link to="/services" className="text-gray-700 hover:text-intern-purple font-medium">
            Services
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-intern-purple font-medium">
            About Us
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-intern-purple font-medium">
            Contact
          </Link>
          <Link to="/search" className="text-gray-700 hover:text-intern-purple">
            <Search className="h-5 w-5" />
          </Link>
        </nav>

        <div className="md:hidden">
          {/* Mobile menu button */}
          <button 
            className="text-gray-700 hover:text-intern-purple"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 border-b border-intern-card-border">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/" 
              className="text-gray-700 hover:text-intern-purple font-medium py-2"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link 
              to="/browse" 
              className="text-gray-700 hover:text-intern-purple font-medium py-2"
              onClick={toggleMobileMenu}
            >
              Browse Internships
            </Link>
            <Link 
              to="/services" 
              className="text-gray-700 hover:text-intern-purple font-medium py-2"
              onClick={toggleMobileMenu}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="text-gray-700 hover:text-intern-purple font-medium py-2"
              onClick={toggleMobileMenu}
            >
              About Us
            </Link>
            <Link 
              to="/contact" 
              className="text-gray-700 hover:text-intern-purple font-medium py-2"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
            <Link 
              to="/search" 
              className="text-gray-700 hover:text-intern-purple font-medium py-2 flex items-center"
              onClick={toggleMobileMenu}
            >
              <Search className="h-5 w-5 mr-2" />
              Search
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
