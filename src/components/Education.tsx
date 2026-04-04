import { motion } from 'motion/react';
import { GraduationCap } from 'lucide-react';

export default function Education({ data }: { data: any[] }) {
  return (
    <section id="education" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-12"
      >
        <h2 className="text-3xl font-bold">Education</h2>
        <div className="h-[1px] bg-white/10 flex-grow"></div>
      </motion.div>

      <div className="space-y-6">
        {data.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start md:items-center justify-between hover:bg-white/[0.07] transition-colors"
          >
            <div className="flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 mt-1">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-100">{edu.degree}</h3>
                <div className="text-lg text-slate-300 mt-1">{edu.institution}</div>
                <div className="text-blue-400 font-medium mt-2">{edu.details}</div>
              </div>
            </div>
            <div className="text-slate-400 font-mono text-sm bg-black/20 px-3 py-1 rounded-full whitespace-nowrap">
              {edu.dates}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
