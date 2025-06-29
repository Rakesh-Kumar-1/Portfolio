import React from 'react';
import { Code2, Database, Globe, Server, GitBranch, Monitor } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Programming Languages',
      color: 'blue',
      skills: [
        { name: 'Java', level: 85 },
        { name: 'JavaScript', level: 80 },
        { name: 'Python', level: 70 },
        { name: 'PHP', level: 75 }
      ]
    },
    {
      icon: Globe,
      title: 'Frontend Development',
      color: 'teal',
      skills: [
        { name: 'React', level: 90 },
        { name: 'HTML', level: 95 },
        { name: 'CSS', level: 90 },
        { name: 'Tailwind CSS', level: 65 }
      ]
    },
    {
      icon: Server,
      title: 'Backend Development',
      color: 'orange',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express.js', level: 80 },
        { name: 'REST API', level: 85 }
      ]
    },
    {
      icon: Database,
      title: 'Database & Tools',
      color: 'green',
      skills: [
        { name: 'SQL', level: 80 },
        { name: 'MongoDB', level: 85 },
        { name: 'Supabase', level: 75 }
      ]
    },
    {
      icon: GitBranch,
      title: 'Development Tools',
      color: 'purple',
      skills: [
        { name: 'VS Code', level: 95 },
        { name: 'Git & GitHub', level: 90 },
        { name: 'Docker', level: 75 }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 text-blue-600 bg-blue-50 border-blue-200',
      teal: 'from-teal-500 to-teal-600 text-teal-600 bg-teal-50 border-teal-200',
      orange: 'from-orange-500 to-orange-600 text-orange-600 bg-orange-50 border-orange-200',
      green: 'from-green-500 to-green-600 text-green-600 bg-green-50 border-green-200',
      purple: 'from-purple-500 to-purple-600 text-purple-600 bg-purple-50 border-purple-200'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels 
            across various programming languages, frameworks, and tools.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 p-5 border border-gray-100"
            >
              <div className={`flex items-center space-x-3 mb-4 p-2.5 rounded-lg border ${getColorClasses(category.color).split(' ').slice(2).join(' ')}`}>
                <category.icon size={20} className={getColorClasses(category.color).split(' ')[2]} />
                <h3 className="font-semibold text-gray-900 text-sm">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-1.5">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                      <span className="text-xs text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div
                        className={`h-1.5 rounded-full bg-gradient-to-r ${getColorClasses(category.color).split(' ').slice(0, 2).join(' ')} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;