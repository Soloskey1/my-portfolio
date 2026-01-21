import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Bookstore Website',
      description:
        "An online book store website named 'Bookie' where users can purchase, read and download a variety of books online.",
      image: 'https://plus.unsplash.com/premium_photo-1669652639337-c513cc42ead6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Ym9va3N8ZW58MHx8MHx8fDA%3D',
      tags: ['HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/bookie',
      demo: 'https://soloskey1.github.io/bookie/',
    },
    {
      title: 'Savorita Restaurant Website',
      description:
        'Savorita is a web app for a restaurant where customers can view and order food. It is a advanced version of the savore.',
      image: 'https://images.unsplash.com/photo-1457460866886-40ef8d4b42a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlc3RhdXJhbnQlMjBmb29kfGVufDB8fDB8fHww',
      tags: ['React', 'TypeScript', 'NextJs', 'Tailwind'],
      github: 'https://github.com/Soloskey1/savorita-website',
      demo: 'https://savorita-website.vercel.app/',
    },
    {
      title: 'Currency Converter',
      description:
        ' This is a simple currency converter web application that convert currencies based on exchange rates.',
      image: 'https://images.unsplash.com/photo-1580048915913-4f8f5cb481c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3VycmVuY3l8ZW58MHx8MHx8fDA%3D',
      tags: ['HTML', 'API Integration', 'JavaScript', 'CSS'],
      github: 'https://github.com/Soloskey1/currency-converter',
      demo: 'https://soloskey1.github.io/currency-converter/',
    },
    {
      title: 'Ecommerce Web App',
      description:
        'An online marketplace where people can view and order different category of products and services online.',
      image: 'https://plus.unsplash.com/premium_vector-1727107302518-635256868dfd?w=352&dpr=2&h=367&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
      tags: ['React', 'TypeScript', 'Vite'],
      github: '#',
      demo: 'https://deeziksmall-b6ra.vercel.app/',
    },
    {
      title: 'Naija Delight Web App',
      description:
        'Naija Delight is a Nigerian restaurant website, where customers can explore, and order food directly from the site, and have access to customer services like cooking classes and booking for events.The websiteis smooth and look good for great user-experience.',
      image: 'https://plus.unsplash.com/premium_photo-1661777692723-ba8dd05065d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8fDA%3D',
      tags: ['Tailwind CSS', 'JavaScript', 'HTML'],
      github: 'https://github.com',
      demo: 'https://naija-delight.vercel.app/',
    },
    /*
    {
      title: 'Fitness Tracker',
      description:
        'A comprehensive fitness tracking app with workout plans, progress tracking, and nutrition monitoring features.',
      image: 'https://images.pexels.com/photos/4162481/pexels-photo-4162481.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React Native', 'Firebase', 'Charts', 'Mobile'],
      github: 'https://github.com',
      demo: 'https://example.com',
    }, */
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">
          Featured <span className="text-cyan-400">Projects</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 group"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 bg-slate-700 text-cyan-400 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
