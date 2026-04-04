import { motion } from 'motion/react';
import { Folder, ExternalLink, Github } from 'lucide-react';

export default function Projects({ data }: { data: any[] }) {
  return (
    <section id="projects" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-12"
      >
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <div className="h-[1px] bg-white/10 flex-grow"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col h-full hover:-translate-y-2 transition-transform duration-300 hover:shadow-[0_10px_30px_-15px_rgba(59,130,246,0.2)]"
          >
            <div className="flex justify-between items-start mb-6">
              <Folder size={40} className="text-blue-400" />
              <div className="flex gap-3">
                {project.links.map((link: any, j: number) => (
                  <a key={j} href={link.url} className="text-slate-400 hover:text-blue-400 transition-colors">
                    {link.name === 'GitHub' ? <Github size={20} /> : <ExternalLink size={20} />}
                  </a>
                ))}
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-3 text-slate-100">{project.title.split('–')[0].trim()}</h3>
            <div className="text-sm text-blue-300 mb-4 font-medium">{project.title.split('–')[1]?.trim()}</div>
            
            <ul className="space-y-2 mb-6 flex-grow">
              {project.bullets.map((bullet: string, j: number) => (
                <li key={j} className="text-sm text-slate-400 flex gap-2">
                  <span className="text-blue-400/50 mt-1">▹</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
              {project.stack.map((tech: string, j: number) => (
                <span key={j} className="text-xs font-mono text-slate-300 bg-white/5 px-2 py-1 rounded">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
