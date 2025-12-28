export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'HTML/CSS', level: 98 },
      ],
    },
    {
      title: 'Tools & Libraries',
      skills: [
        { name: 'Git', level: 88 },
        { name: 'Vite', level: 85 },
        { name: 'Redux', level: 80 },
        { name: 'React Query', level: 82 },
        { name: 'Framer Motion', level: 75 },
      ],
    },
    {
      title: 'Other',
      skills: [
        { name: 'Responsive Design', level: 95 },
        { name: 'API Integration', level: 88 },
        { name: 'Testing', level: 78 },
        { name: 'Accessibility', level: 85 },
        { name: 'Performance', level: 82 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4 text-center">
          My <span className="text-cyan-400">Skills</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-12"></div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700">
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
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
}
