import React from 'react';
import { Download,MapPin, Mail, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50 flex items-center pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="space-y-3">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                Hi, I'm &nbsp;
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">
                  Rakesh Kumar
                </span>
              </h1>
              <h2 className="text-lg md:text-xl text-gray-600 font-medium">
                Software Developer & B.Tech Student
              </h2>
              <p className="text-base text-gray-600 leading-relaxed max-w-xl">
                Passionate software developer pursuing BTech at Amity University Patna.
                I love creating innovative solutions and building impactful applications
                that make a difference.
              </p>
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center space-x-2">
                <MapPin size={16} className="text-blue-600" />
                <span>Patna, Bihar</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-blue-600" />
                <span>rakesh.si3168@gmail.com</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="flex items-center space-x-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg text-sm">
                <a href='/images/RAKESH_KUMAR_RESUME.pdf'>
                  <Download size={16} />
                  <span>Download Resume</span>
                </a>
              </button>

              <div className="flex space-x-2">
                <a
                  href="https://github.com/Rakesh-Kumar-1"
                  className="p-2.5 bg-white text-gray-700 rounded-lg hover:bg-gray-50 hover:text-blue-600 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/rakesh-kumar-56458b281"
                  className="p-2.5 bg-white text-gray-700 rounded-lg hover:bg-gray-50 hover:text-blue-600 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  <Linkedin size={18} />
                </a>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 bg-white rounded-xl shadow-xl p-6 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <div className="aspect-square bg-gradient-to-br from-blue-100 to-teal-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                <img
                  src="/public/images/IMG_20250628_221725.jpg"
                  alt="Rakesh Kumar"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>

              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">B.Tech Student</h3>
                <p className="text-gray-600 text-sm">Amity University Patna</p>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl transform rotate-6 opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;