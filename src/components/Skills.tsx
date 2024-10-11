import React from 'react';
import { Code, Database, Globe, Server } from 'lucide-react';

const skills = [
  { name: 'Frontend Development', icon: Globe, items: ['React', 'Vue.js', 'HTML5', 'CSS3', 'JavaScript'] },
  { name: 'Backend Development', icon: Server, items: ['Node.js', 'Express', 'Python', 'Django'] },
  { name: 'Databases', icon: Database, items: ['MySQL', 'MongoDB', 'PostgreSQL'] },
  { name: 'Other', icon: Code, items: ['Git', 'Docker', 'AWS', 'RESTful APIs'] },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 gradient-text">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <skill.icon className="w-12 h-12 text-blue-500 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">{skill.name}</h3>
              <ul className="space-y-2">
                {skill.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;