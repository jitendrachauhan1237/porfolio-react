import React, { useEffect, useRef } from 'react';


const Skills = () => {
  const skillsRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slideUp');
        }
      },
      { threshold: 0.1 }
    );
    
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    
    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const skills = [
    { name: 'HTML5', level: 90, color: 'from-orange-500 to-red-500' },
    { name: 'CSS3', level: 85, color: 'from-blue-500 to-indigo-500' },
    { name: 'JavaScript', level: 80, color: 'from-yellow-400 to-yellow-600' },
    { name: 'React.js', level: 85, color: 'from-cyan-400 to-blue-500' },
    { name: 'Tailwind CSS', level: 80, color: 'from-teal-400 to-teal-600' },
    { name: 'Redux', level: 75, color: 'from-purple-500 to-indigo-600' },
    { name: 'Responsive Design', level: 90, color: 'from-green-400 to-green-600' },
    { name: 'Git', level: 75, color: 'from-orange-400 to-red-600' },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to create amazing web experiences
          </p>
        </div>
        
        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 opacity-0">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-gray-800">{skill.name}</h3>
                <span className="text-gray-600 font-medium">{skill.level}%</span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full bg-gradient-to-r ${skill.color} animate-growWidth`} 
                  style={{ width: `${skill.level}%`, animationDelay: `${index * 0.1}s` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white p-8 rounded-lg shadow-lg relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-4xl font-bold text-orange-500 mb-2">15+</div>
              <p className="text-gray-600">Projects Completed</p>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-blue-500 mb-2">99%</div>
              <p className="text-gray-600">Client Satisfaction</p>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-green-500 mb-2">500+</div>
              <p className="text-gray-600">Cups of Chai</p>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold text-purple-500 mb-2">24/7</div>
              <p className="text-gray-600">Support</p>
            </div>
          </div>
          
         
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-16 h-16 bg-blue-300 rounded-full opacity-20 animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-20 h-20 bg-pink-300 rounded-full opacity-20 animate-float delay-500"></div>
    </section>
  );
};

export default Skills;