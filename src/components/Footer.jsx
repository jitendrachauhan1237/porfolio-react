import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">
              Jitendra Chauhan
            </h2>
            <p className="text-gray-400 mt-2">Frontend Developer</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">About</a></li>
                <li><a href="#skills" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">Skills</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-blue-500 transition-colors duration-300">Projects</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">chauhanjitendra1527@gmail.com</li>
                {/* <li className="text-gray-400">+91 98765 43210</li> */}
                {/* <li className="text-gray-400">New Delhi, India</li> */}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-1">
            Made with <Heart size={16} className="text-red-500 fill-red-500" /> by Jitendra Chauhan | &copy; {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;