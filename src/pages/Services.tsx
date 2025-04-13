
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Database, Laptop, School, Shield, Users, Zap, BookOpen } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Code className="h-10 w-10 text-intern-purple" />,
      title: "Web Development Internships",
      description: "Get hands-on experience with modern web technologies including React, Angular, Vue.js, Node.js, and more."
    },
    {
      icon: <Laptop className="h-10 w-10 text-intern-purple" />,
      title: "App Development",
      description: "Learn mobile app development for iOS and Android using Flutter, React Native, Kotlin, or Swift."
    },
    {
      icon: <Database className="h-10 w-10 text-intern-purple" />,
      title: "Data Science",
      description: "Analyze data, build models, and extract insights using Python, R, SQL, and various data visualization tools."
    },
    {
      icon: <Zap className="h-10 w-10 text-intern-purple" />,
      title: "AI & Machine Learning",
      description: "Work on cutting-edge AI projects involving deep learning, computer vision, NLP, and predictive analytics."
    },
    {
      icon: <Shield className="h-10 w-10 text-intern-purple" />,
      title: "Cybersecurity",
      description: "Gain experience in network security, penetration testing, security audits, and vulnerability assessment."
    },
    {
      icon: <BookOpen className="h-10 w-10 text-intern-purple" />,
      title: "Technical Writing",
      description: "Develop skills in creating documentation, tutorials, blogs, and technical content for tech products."
    },
    {
      icon: <Users className="h-10 w-10 text-intern-purple" />,
      title: "UI/UX Design",
      description: "Design user interfaces and experiences for web and mobile applications with tools like Figma and Adobe XD."
    },
    {
      icon: <School className="h-10 w-10 text-intern-purple" />,
      title: "Training & Workshops",
      description: "Participate in specialized training programs and workshops to enhance your technical skills."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Services Header */}
        <section className="bg-intern-bg-light py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center text-gray-900 mb-4">Our Services</h1>
            <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto">
              We offer a wide range of internship opportunities and services to help B.Tech students gain practical experience
            </p>
          </div>
        </section>
        
        {/* Services Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="border border-intern-card-border hover:border-intern-light-purple transition-colors duration-300">
                  <CardContent className="pt-6 pb-6 flex flex-col items-center text-center">
                    <div className="bg-intern-purple/10 p-4 rounded-full mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    <Button 
                      variant="outline" 
                      className="border-intern-purple text-intern-purple hover:bg-intern-purple hover:text-white mt-auto"
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Additional Services */}
        <section className="py-16 bg-intern-bg-light">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How We Support Students</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Beyond internship opportunities, we provide additional resources to help you succeed in your career
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-sm p-8 border border-intern-card-border">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Career Guidance</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-intern-purple rounded-full p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Resume and cover letter reviews by industry experts</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-intern-purple rounded-full p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">One-on-one career counseling sessions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-intern-purple rounded-full p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Mock interview preparation with feedback</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-intern-purple rounded-full p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Portfolio development assistance</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm p-8 border border-intern-card-border">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Learning Resources</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-intern-purple rounded-full p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Access to online courses and tutorials</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-intern-purple rounded-full p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Workshops on in-demand technical skills</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-intern-purple rounded-full p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Webinars with industry professionals</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-intern-purple rounded-full p-1 mr-3 mt-1">
                      <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">Technical documentation and study materials</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-intern-purple py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Tech Journey?</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              Browse our available internships and services to kickstart your career in the tech industry
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button 
                className="bg-white text-intern-purple hover:bg-gray-100"
              >
                Browse Internships
              </Button>
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-intern-purple"
              >
                Contact Us
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
