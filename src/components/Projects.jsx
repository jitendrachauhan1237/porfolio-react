import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const projectsRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slideUp');
        }
      },
      { threshold: 0.1 }
    );
    
    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }
    
    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  const projects = [
    {
      id: 1,
      title: 'FixItGo Service Portal',
      description: 'A responsive service booking platform for home services with real-time tracking and payment integration.',
      image: 'https://fixitgoservices.com/services%20(1).png',
      category: 'react',
      technologies: ['React', 'Redux', 'Tailwind CSS', 'Firebase'],
      liveLink: 'https://fixitgoservices.com/',
      githubLink: 'https://github.com/Fixitgotech/fixitgoservices',
    },
    {
      id: 2,
      title: 'VibeeCart E-commerce',
      description: 'VibeCart Frontend is a user-friendly, responsive e-commerce platform that ensures seamless product browsing, search, and secure authentication.',
      image: 'https://vibeecart.netlify.app/Assets/vibecart.png',
      category: 'react',
      technologies: ['JavaScript', 'React.js', 'Tailwind css', 'Node.js'],
      liveLink: '#',
      githubLink: 'https://github.com/jitendrachauhan1237/vibecart-frontend-react',
    },
    {
      id: 3,
      title: 'Travel Booking App',
      description: 'A travel booking application with hotel and flight reservations, itinerary planning, and user reviews.',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1421&q=80',
      category: 'javascript',
      technologies: ['React', 'Context API', 'Styled Components', 'Express'],
      liveLink: '#',
      githubLink: '#',
    },
    {
      id: 4,
      title: 'Weather Forecast Widget',
      description: 'Interactive weather widget with 7-day forecast, location detection, and customizable display options.',
      image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      category: 'javascript',
      technologies: ['JavaScript', 'Weather API', 'CSS3', 'HTML5'],
      liveLink: '#',
      githubLink: '#',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Check out some of my recent work that showcases my skills and expertise
          </p>
        </div>
        
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {['all', 'react', 'javascript'].map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-blue-500 to-pink-500 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 opacity-0">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full lg:h-64 aspect-video lg:object-cover md:bg-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex gap-4 mb-4">
                      <a 
                        href={project.liveLink} 
                        className="bg-white text-gray-800 p-2 rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink size={18} />
                      </a>
                      <a 
                        href={project.githubLink} 
                        className="bg-white text-gray-800 p-2 rounded-full hover:bg-orange-500 hover:text-white transition-colors duration-300"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-16 h-16 bg-green-300 rounded-full opacity-20 animate-float"></div>
    </section>
  );
};

export default Projects;