import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6">
            Hi, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-teal-400 animate-gradient">
              Solomon Afolabi
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300 mb-4">
            Frontend Developer & Web Design Enthusiast
          </p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Crafting beautiful, responsive, and user-friendly web experiences with modern technologies
          </p>
        </div>

        <div className="flex justify-center gap-6 mb-12">
          <a
            href="https://github.com/Soloskey1"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <Github className="text-slate-300 hover:text-cyan-400 transition-colors" size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <Linkedin className="text-slate-300 hover:text-cyan-400 transition-colors" size={24} />
          </a>
          <a
            href="mailto:solomonyomi3@gmail.com"
            className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <Mail className="text-slate-300 hover:text-cyan-400 transition-colors" size={24} />
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50"
          >
            View My Work
          </a>
          <a
            href="tel:+2349067512921"
            className="px-8 py-3 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-cyan-400" size={32} />
        </div>
      </div>
    </section>
  );
}
