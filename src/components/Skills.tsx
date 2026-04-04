import { motion } from 'motion/react';

export default function Skills({ data }: { data: any[] }) {
  return (
    <section id="skills" className="scroll-mt-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-12"
      >
        <h2 className="text-3xl font-bold">Technical Skills</h2>
        <div className="h-[1px] bg-white/10 flex-grow"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {data.map((group, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6"
          >
            <h3 className="text-lg font-bold text-blue-400 mb-4">{group.category}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item: string, j: number) => (
                <span
                  key={j}
                  className="px-3 py-1.5 bg-slate-900 border border-white/10 rounded-lg text-sm text-slate-300 hover:border-blue-500/50 hover:text-blue-400 transition-colors cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
