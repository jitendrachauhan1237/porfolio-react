import React, { useEffect, useRef } from 'react';
import { Calendar, Briefcase, Award } from 'lucide-react';

const About = () => {
  const aboutRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slideUp');
        }
      },
      { threshold: 0.1 }
    );
    
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    
    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto"></div>
        </div>
        
        <div ref={aboutRef} className="flex flex-col md:flex-row items-center gap-12 opacity-0">
          <div className="w-full md:w-2/5 relative">
            <div className="relative">
              <div className="w-full h-full bg-gradient-to-r from-blue-500 to-pink-500 absolute -top-4 -left-4 rounded-lg opacity-20"></div>
              <img 
                src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="" 
                className="relative z-10 rounded-lg shadow-lg"
              />

            </div>
          </div>
          
          <div className="w-full md:w-3/5">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Frontend Developer with a Passion for Creative Solutions</h3>
            <p className="text-gray-600 mb-6">
              Namaste! I'm Jitendra Chauhan, a frontend developer with 1 year of experience at FixItGoServices.com. 
              I specialize in creating responsive, user-friendly web applications that combine functionality with delightful user experiences.
            </p>
            <p className="text-gray-600 mb-8">
              My journey in web development started with a fascination for creating visually appealing interfaces that solve real-world problems.
              I'm passionate about clean code, accessibility, and staying updated with the latest frontend technologies.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <Calendar className="text-blue-500 mb-2" size={24} />
                <h4 className="font-bold text-gray-800 mb-1">Experience</h4>
                <p className="text-gray-600">1 Year</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <Briefcase className="text-blue-500 mb-2" size={24} />
                <h4 className="font-bold text-gray-800 mb-1">Company</h4>
                <p className="text-gray-600">FixItGoServices</p>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <Award className="text-blue-500 mb-2" size={24} />
                <h4 className="font-bold text-gray-800 mb-1">Projects</h4>
                <p className="text-gray-600">15+ Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-16 h-16 bg-blue-300 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-purple-300 rounded-full opacity-20 animate-float delay-700"></div>
    </section>
  );
};

export default About;