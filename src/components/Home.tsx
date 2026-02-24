import { Linkedin, Github, ChevronDown } from 'lucide-react';

const Home = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzIyMiIgb3BhY2l0eT0iLjA1IiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-20"></div>

      <div className="relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center animate-fade-in order-2 lg:order-1">
            <h1 className="text-5xl sm:text-6xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
              Aska Rasugu
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 mb-8">
              Full Stack Software Engineer
            </p>
            <p className="text-lg text-gray-300 max-w-2xl mb-12">
              Crafting elegant solutions to complex problems with modern web technologies
            </p>

            <div className="flex justify-center space-x-6 mb-12">
              <a
                href="https://www.linkedin.com/in/aska-rasugu-95b720219/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin className="w-6 h-6 text-white" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  LinkedIn
                </span>
              </a>
              <a
                href="https://github.com/AskaRasugu"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              >
                <Github className="w-6 h-6 text-white" />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  GitHub
                </span>
              </a>
            </div>

            <button
              onClick={() => scrollToSection('about')}
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-slate-900 transition-all duration-300 transform hover:scale-105"
            >
              View My Work
            </button>
          </div>

          {/* Right side - Image */}
          <div className="flex justify-center animate-fade-in order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 rounded-full blur-3xl opacity-60 scale-105"></div>
              <img
                src="/images/profile.jpg"
                alt="Aska Rasugu"
                className="relative w-72 h-80 object-cover rounded-full shadow-2xl border-4 border-slate-700"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button
            onClick={() => scrollToSection('about')}
            className="text-white/60 hover:text-white transition-colors"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
