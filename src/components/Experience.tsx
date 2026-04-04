import { motion } from 'motion/react';
import { Briefcase, ExternalLink } from 'lucide-react';


export default function Experience({ data }: { data: any[] }) {
  return (
    <section id="experience" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-12"
      >
        <h2 className="text-3xl font-bold">Experience</h2>
        <div className="h-[1px] bg-white/10 flex-grow"></div>
      </motion.div>

      <div className="space-y-8">
        {data.map((job, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative pl-8 md:pl-0"
          >
            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-[1px] bg-white/10 ml-[19px]"></div>
            
            <div className="md:flex gap-8 relative">
              <div className="hidden md:flex flex-col items-center mt-1">
                <div className="w-10 h-10 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center z-10">
                  <Briefcase size={18} className="text-blue-400" />
                </div>
              </div>
              
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex-grow hover:bg-white/[0.07] transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl font-bold text-slate-100">{job.role}</h3>
                      {job.link && (
                        <a
                          href={job.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-slate-400 hover:text-blue-400 transition-colors"
                          aria-label={`Open ${job.role} link`}
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                    <div className="text-blue-400 font-medium">{job.company}</div>
                  </div>
                  <div className="text-slate-400 font-mono text-sm bg-black/20 px-3 py-1 rounded-full w-fit">
                    {job.dates}
                  </div>
                </div>
                
                <ul className="space-y-3 mt-6">
                  {job.bullets.map((bullet: string, j: number) => (
                    <li key={j} className="flex gap-3 text-slate-300">
                      <span className="text-blue-400 mt-1.5">▹</span>
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
