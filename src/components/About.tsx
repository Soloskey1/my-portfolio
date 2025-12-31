import { Code2, Palette, Zap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">
          About <span className="text-cyan-400">Me</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-slate-300 text-lg leading-relaxed">
              I'm a passionate frontend developer with a keen eye for design and a love for creating
              seamless user experiences. With 3+ years of experience in modern web technologies, I
              specialize in building responsive web applications,  blog, and landing pages for business brands.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              My journey in web development started with a curiosity about how websites work, and
              it has evolved into a career focused on pushing the boundaries of what's possible on
              the web. I'm constantly learning and adapting to new technologies to stay at the
              forefront of frontend development.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <span className="px-4 py-2 bg-slate-800 text-cyan-400 rounded-full text-sm">
                React
              </span>
              <span className="px-4 py-2 bg-slate-800 text-cyan-400 rounded-full text-sm">
                TypeScript
              </span>
              <span className="px-4 py-2 bg-slate-800 text-cyan-400 rounded-full text-sm">
                Tailwind CSS
              </span>
              <span className="px-4 py-2 bg-slate-800 text-cyan-400 rounded-full text-sm">
                Next.js
              </span>
              <span className="px-4 py-2 bg-slate-800 text-cyan-400 rounded-full text-sm">
                JavaScript
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                <Code2 className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Clean Code</h3>
              <p className="text-slate-400">
                Writing maintainable, scalable, and well-documented code that follows best practices
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                <Palette className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Responsive Design</h3>
              <p className="text-slate-400">
                Creating responsive web designs adaptable to different screen sizes
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
              <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                <Zap className="text-cyan-400" size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Performance</h3>
              <p className="text-slate-400">
                Optimizing applications for speed, efficiency, and exceptional user experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
