import { Mail, Linkedin, Github, MapPin } from 'lucide-react';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@askarasugu.dev',
      link: 'mailto:hello@askarasugu.dev',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: Linkedin,
      title: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/aska-rasugu-95b720219/',
      color: 'from-blue-600 to-blue-700',
    },
    {
      icon: Github,
      title: 'GitHub',
      value: 'View my code',
      link: 'https://github.com/AskaRasugu',
      color: 'from-gray-700 to-gray-900',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={index}
                href={method.link}
                target={method.link.startsWith('http') ? '_blank' : undefined}
                rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>

                <div className="relative z-10 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-blue-600 transition-colors">
                    {method.value}
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-12 text-center text-white">
          <MapPin className="w-12 h-12 mx-auto mb-4 opacity-80" />
          <h3 className="text-2xl font-bold mb-2">Based In</h3>
          <p className="text-lg text-blue-100">Available for remote opportunities worldwide</p>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Looking forward to hearing from you!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
