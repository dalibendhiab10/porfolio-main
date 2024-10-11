import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 gradient-text">About Me</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt="Your Name"
              className="rounded-lg shadow-lg transform hover:scale-105 transition duration-300"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
              Hello! I'm a passionate software engineering student with a keen interest in building innovative solutions. My journey in tech started when I wrote my first "Hello, World!" program, and since then, I've been hooked on the endless possibilities of coding.
            </p>
            <p className="text-lg mb-4 text-gray-700 dark:text-gray-300">
              Currently pursuing my degree in Computer Science at [Your University], I'm constantly learning and applying new technologies to solve real-world problems. My goal is to create software that not only functions flawlessly but also positively impacts users' lives.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              When I'm not coding, you can find me [Your Hobbies/Interests]. I believe in the power of continuous learning and am always excited to take on new challenges in the ever-evolving world of technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;