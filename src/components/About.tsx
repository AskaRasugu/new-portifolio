import { Code2, Palette, Database, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: Palette,
      technologies: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Next.js'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      category: 'Backend',
      icon: Code2,
      technologies: ['Node.js', 'Express', 'Python', 'REST APIs', 'GraphQL'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      category: 'Database',
      icon: Database,
      technologies: ['PostgreSQL', 'MongoDB', 'Supabase', 'SQL', 'NoSQL'],
      color: 'from-orange-500 to-red-500',
    },
    {
      category: 'Tools & Other',
      icon: Zap,
      technologies: ['Git', 'Docker', 'AWS', 'Vercel', 'Linux', 'CI/CD'],
      color: 'from-purple-500 to-pink-500',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with expertise in building modern web applications.
            I love turning ideas into reality through clean, efficient code and intuitive user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>

                <div className="relative z-10">
                  <div className={`w-14 h-14 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {skill.category}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
            <p className="text-lg text-gray-700 max-w-2xl">
              I'm always excited to collaborate on interesting projects and learn new technologies.
              Let's build something amazing together!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
