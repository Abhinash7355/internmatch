
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Testimonial } from "../types";
import { useAnimation } from "@/hooks/use-animation";

interface TestimonialSectionProps {
  testimonials: Testimonial[];
}

const TestimonialSection: React.FC<TestimonialSectionProps> = ({ testimonials }) => {
  const headingRef = useAnimation();

  return (
    <section className="py-16 bg-intern-bg-light overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 
          ref={headingRef}
          className="opacity-0 text-3xl font-bold text-center text-gray-900 mb-12"
        >
          Success Stories
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-animation">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id} 
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: Testimonial;
  index: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, index }) => {
  const cardRef = React.useRef<HTMLDivElement>(null);
  
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100');
              entry.target.classList.remove('opacity-0', 'translate-y-4');
            }, index * 150);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );
    
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    
    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index]);

  return (
    <Card 
      ref={cardRef}
      className="opacity-0 translate-y-4 transition-all duration-500 border border-intern-card-border bg-white overflow-hidden hover:shadow-md transition-shadow duration-300 hover:border-intern-light-purple transform-gpu"
    >
      <CardContent className="pt-6 pb-6">
        <div className="flex items-center mb-4">
          <div className="h-12 w-12 rounded-full bg-gray-100 overflow-hidden mr-4">
            <img 
              src={testimonial.image} 
              alt={testimonial.name} 
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
            <p className="text-sm text-gray-600">{testimonial.role}</p>
            <p className="text-xs text-intern-purple">{testimonial.company}</p>
          </div>
        </div>
        
        <div className="relative">
          <svg 
            className="absolute top-0 left-0 h-8 w-8 text-gray-200 transform -translate-x-3 -translate-y-3 opacity-50" 
            fill="currentColor" 
            viewBox="0 0 32 32" 
            aria-hidden="true"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          
          <p className="relative text-gray-700 mt-3">{testimonial.testimonial}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialSection;
