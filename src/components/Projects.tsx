import React from 'react';
import { ExternalLink, Github, Calendar, Code, Database, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Job Board',
      description: 'A comprehensive job portal platform where employers can post jobs and candidates can apply. Features include user authentication, job search, and application management.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS'],
      githubUrl: 'https://github.com/Rakesh-Kumar-1/Job-Board',
      liveUrl: '#',
      date: ' Nov 2023',
      status: 'Completed',
      icon: Database
    },
    {
      title: 'Weather Forecast App',
      description: 'A responsive weather application that provides real-time weather information and forecasts using weather API integration with beautiful UI.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Weather API', 'CSS', 'JavaScript'],
      githubUrl: 'https://github.com/Rakesh-Kumar-1/Weather-App',
      liveUrl: 'https://weather-app-livid-omega.vercel.app/',
      date: 'Oct 2023',
      status: 'Completed',
      icon: Globe
    },
    {
      title: 'Gmail App',
      description: 'A full-stack email application with sending and receiving capabilities. Built with React frontend and Node.js backend with MongoDB for data storage.',
      image: 'https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Express.js'],
      githubUrl: 'https://github.com/Rakesh-Kumar-1/Gmail',
      liveUrl: '#',
      date: 'March 2024',
      status: 'Completed',
      icon: Code
    },
    {
      title: 'Video Calling App',
      description: 'Real-time video calling application built with React.js and MediaSoup for high-quality peer-to-peer video communication.',
      image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'MediaSoup', 'WebRTC', 'Socket.io'],
      githubUrl: 'https://github.com/Rakesh-Kumar-1/Vedio-Confress-MediaSoup',
      liveUrl: '#',
      date: 'Aug 2024',
      status: 'Completed',
      icon: Globe
    },
    {
      title: 'FinAdvise',
      description: 'A comprehensive financial advisory platform with multiple user roles (Admin, User, Advisor, Manager). Features chatbot integration, payment processing, email notifications, and automatic meeting link generation.',
      image: 'https://images.pexels.com/photos/3483098/pexels-photo-3483098.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Node.js', 'MongoDB', 'Payment Gateway', 'Chatbot API'],
      githubUrl: '#',
      //    githubUrl: 'https://github.com/Rakesh-Kumar-1/FinAdvise',
      liveUrl: '#',
      date: 'June 2025',
      status: 'Working',
      icon: Database
    }
  ];

  const getStatusColor = (status: string) => {
    return status === 'Completed'
      ? 'bg-green-100 text-green-800'
      : 'bg-blue-100 text-blue-800';
  };

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating various technologies and
            problem-solving approaches across different domains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                <div className="absolute top-3 right-3 flex space-x-2">
                  <a
                    href={project.githubUrl}
                    className="p-1.5 bg-white/90 text-gray-700 rounded-md hover:bg-white hover:text-gray-900 transition-all duration-200 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
                  >
                    <Github size={14} />
                  </a>
                  <a
                    href={project.liveUrl}
                    className="p-1.5 bg-white/90 text-gray-700 rounded-md hover:bg-white hover:text-blue-600 transition-all duration-200 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <project.icon size={16} className="text-blue-600" />
                    <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
                  </div>
                  <div className="flex items-center text-gray-500 text-xs">
                    <Calendar size={12} className="mr-1" />
                    {project.date}
                  </div>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                  {project.description}
                </p>

                <div className="mb-3">
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-0.5 bg-blue-50 text-blue-700 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* <div className="flex space-x-2 pt-3 border-t border-gray-100">
                  <a
                    href={project.githubUrl}
                    className="flex-1 flex items-center justify-center space-x-1 py-2 px-3 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors text-xs font-medium"
                  >
                    <Code size={12} />
                    {project.liveUrl === '#'?<span>Code</span>:<span>Link</span>}
                    
                  </a>
                </div>  */}
                <div className="flex space-x-2 pt-3 border-t border-gray-100">
                  {project.liveUrl === '#' ?
                    <a
                      href={project.githubUrl}
                      className="flex-1 flex items-center justify-center space-x-1 py-2 px-3 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors text-xs font-medium"
                    >
                      <Code size={12} />
                      <span>Code</span>
                    </a>
                    :
                    <a
                      href={project.liveUrl}
                      className="flex-1 flex items-center justify-center space-x-1 py-2 px-3 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors text-xs font-medium"
                    >
                      <Code size={12} />
                      <span>Link</span>
                    </a>
                  }
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://github.com/Rakesh-Kumar-1">
            <button className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-2.5 rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all duration-200 transform hover:scale-105 shadow-lg text-sm">
              <Github size={16} />

              <span>View All Projects on GitHub</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;