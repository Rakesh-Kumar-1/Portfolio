import React from 'react';
import { Code, Zap, Heart, Target, GraduationCap, School } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable and efficient code following best practices'
    },
    {
      icon: Zap,
      title: 'Fast Learner',
      description: 'Quickly adapting to new technologies and frameworks'
    },
    {
      icon: Heart,
      title: 'Passionate',
      description: 'Genuinely love problem-solving and creating digital solutions'
    },
    {
      icon: Target,
      title: 'Goal-Oriented',
      description: 'Focused on delivering results and meeting objectives'
    }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm a dedicated software developer with a passion for creating innovative solutions 
            and learning cutting-edge technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-5">
            <div className="prose text-gray-600">
              <p className="mb-4">
                Currently pursuing my BTech degree at Amity University Patna, I'm passionate 
                about software development and technology innovation. My journey in programming 
                started with curiosity and has evolved into a deep commitment to creating 
                meaningful digital experiences.
              </p>
              <p className="mb-4">
                I enjoy working on challenging projects that push my boundaries and allow me 
                to explore new technologies. Whether it's frontend development, backend systems, 
                or full-stack applications, I approach each project with enthusiasm and attention to detail.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <div className="flex items-center space-x-2 mb-2">
                  <GraduationCap size={18} className="text-blue-600" />
                  <h3 className="font-semibold text-gray-900">College</h3>
                </div>
                <div className="text-gray-700">
                  <p className="font-medium">Bachelor of Technology (BTech)</p>
                  <p className="text-blue-600 text-sm">Amity University Patna</p>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-100">
                <div className="flex items-center space-x-2 mb-2">
                  <School size={18} className="text-green-600" />
                  <h3 className="font-semibold text-gray-900">Schooling</h3>
                </div>
                <div className="text-gray-700">
                  <p className="font-medium">High School</p>
                  <p className="text-green-600 text-sm">Don Bosco Academy Patna</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-center space-x-2 mb-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <item.icon size={16} className="text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
                </div>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;