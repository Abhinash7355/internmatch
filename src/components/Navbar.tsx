
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Menu, Search } from "lucide-react";

const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);
  
  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 w-full bg-white border-b border-intern-card-border transition-shadow duration-300 ${
        scrolled ? 'shadow-md' : 'shadow-sm'
      }`}
    >
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
              aria-hidden="true"
            >
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
              <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
            </svg>
          </div>
          <span className="text-xl font-bold text-gray-900">InternMatch</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink to="/" label="Home" />
          <NavLink to="/browse" label="Browse Internships" />
          <NavLink to="/services" label="Services" />
          <NavLink to="/about" label="About Us" />
          <NavLink to="/contact" label="Contact" />
          <NavLink to="/search">
            <Search className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </NavLink>
        </nav>

        <div className="md:hidden">
          {/* Mobile menu button */}
          <button 
            className="text-gray-700 hover:text-intern-purple"
            onClick={toggleMobileMenu}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 border-b border-intern-card-border">
          <nav className="flex flex-col space-y-4">
            <MobileNavLink to="/" label="Home" onClick={toggleMobileMenu} />
            <MobileNavLink to="/browse" label="Browse Internships" onClick={toggleMobileMenu} />
            <MobileNavLink to="/services" label="Services" onClick={toggleMobileMenu} />
            <MobileNavLink to="/about" label="About Us" onClick={toggleMobileMenu} />
            <MobileNavLink to="/contact" label="Contact" onClick={toggleMobileMenu} />
            <MobileNavLink to="/search" onClick={toggleMobileMenu}>
              <Search className="h-5 w-5 mr-2" aria-hidden="true" />
              <span>Search</span>
            </MobileNavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

// Helper component for desktop navigation links
const NavLink = ({ to, label, children }: { to: string; label?: string; children?: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`text-gray-700 hover:text-intern-purple font-medium transition-colors ${
        isActive ? 'text-intern-purple' : ''
      }`}
    >
      {label || children}
    </Link>
  );
};

// Helper component for mobile navigation links
const MobileNavLink = ({ 
  to, 
  label, 
  children,
  onClick 
}: { 
  to: string; 
  label?: string; 
  children?: React.ReactNode;
  onClick?: () => void;
}) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to} 
      className={`text-gray-700 hover:text-intern-purple font-medium py-2 flex items-center ${
        isActive ? 'text-intern-purple' : ''
      }`}
      onClick={onClick}
    >
      {label || children}
    </Link>
  );
};

export default Navbar;
