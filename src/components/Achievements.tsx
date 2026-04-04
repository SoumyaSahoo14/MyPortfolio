import { motion } from 'motion/react';
import { Award } from 'lucide-react';

export default function Achievements({ data }: { data: any[] }) {
  return (
    <section id="achievements" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-12"
      >
        <h2 className="text-3xl font-bold">Achievements & Certifications</h2>
        <div className="h-[1px] bg-white/10 flex-grow"></div>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {data.map((achievement, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-blue-500/30 transition-colors"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Award size={64} />
            </div>
            <div className="relative z-10">
              <div className="text-blue-400 mb-4">
                <Award size={24} />
              </div>
              <h3 className="text-lg font-bold text-slate-100 mb-2 leading-snug">
                {achievement.title}
              </h3>
              <p className="text-sm text-slate-400">
                {achievement.context}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
