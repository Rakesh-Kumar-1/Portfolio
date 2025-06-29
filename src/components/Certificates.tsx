import React from 'react';
import { Award, Calendar, ExternalLink, CheckCircle, Star, BookOpen } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: 'MERN Stack Developer',
      issuer: '30 Days Coding',
      date: 'December 2023',
      image: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Comprehensive certification covering MongoDB, Express.js, React, and Node.js for full-stack web development.',
      skills: ['MongoDB', 'Express.js', 'React', 'Node.js', 'JavaScript'],
      credentialUrl: '#'
    },
    {
      title: 'Mastering MediaSoup',
      issuer: 'Udemy',
      date: 'November 2023',
      image: 'https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Advanced course on MediaSoup for building scalable real-time video communication applications.',
      skills: ['MediaSoup', 'WebRTC', 'Real-time Communication', 'Video Streaming'],
      credentialUrl: '/public/images/MediaSoup.pdf'
    },
    {
      title: 'Cloud Computing and Distributed Systems',
      issuer: 'NPTEL',
      date: 'October 2023',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Comprehensive understanding of cloud computing principles, distributed systems architecture, and scalability.',
      skills: ['Cloud Computing', 'Distributed Systems', 'Scalability', 'System Design'],
      credentialUrl: '/public/images/Cloud Computing and Distributed Systems.pdf'
    },
    {
      title: 'Software Testing for DevOps',
      issuer: 'Infosys Springboard',
      date: 'September 2023',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Advanced software testing methodologies and practices specifically designed for DevOps environments.',
      skills: ['Software Testing', 'DevOps', 'Automation Testing', 'CI/CD'],
      credentialUrl: '/public/images/DevOps.pdf'
    },
    {
      title: 'Development and Advanced Engineering',
      issuer: 'Accenture',
      date: 'August 2023',
      image: 'https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Advanced engineering practices and development methodologies for enterprise-level applications.',
      skills: ['Software Engineering', 'Advanced Development', 'Enterprise Solutions', 'Best Practices'],
      credentialUrl: '/public/images/Accenture.pdf'
    }
  ];

  return (
    <section id="certificates" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Certifications & Achievements
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional certifications and achievements that demonstrate my commitment 
            to continuous learning and skill development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3">
                  <a
                    href={cert.credentialUrl}
                    className="p-1.5 bg-white/90 text-gray-700 rounded-md hover:bg-white hover:text-blue-600 transition-all duration-200 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
                  >
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-base font-semibold text-gray-900 leading-tight">{cert.title}</h3>
                  <Award size={16} className="text-yellow-500 flex-shrink-0 ml-2" />
                </div>

                <div className="flex items-center text-blue-600 text-sm font-medium mb-1">
                  <BookOpen size={12} className="mr-1" />
                  {cert.issuer}
                </div>

                <div className="flex items-center text-gray-500 text-xs mb-3">
                  <Calendar size={12} className="mr-1" />
                  {cert.date}
                </div>

                <p className="text-gray-600 text-xs leading-relaxed mb-3">
                  {cert.description}
                </p>

                <div className="mb-3">
                  <h4 className="text-xs font-medium text-gray-900 mb-1.5 flex items-center">
                    <Star size={12} className="mr-1 text-yellow-500" />
                    Skills Covered
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-1.5 py-0.5 bg-blue-50 text-blue-700 rounded text-xs font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-gray-100">
                  <a
                    href={cert.credentialUrl}
                    className="w-full flex items-center justify-center space-x-1 py-2 px-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-md hover:from-blue-700 hover:to-teal-700 transition-all duration-200 transform hover:scale-105 text-xs font-medium"
                  >
                    <ExternalLink size={12} />
                    <span>View Certificate</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certificates;