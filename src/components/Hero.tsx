import { motion } from 'motion/react';
import { Download, ChevronRight, Mail, Phone, Github, Linkedin } from 'lucide-react';
import ProfileImg from '../data/Profile.jpg';

export default function Hero({ data }: { data: any }) {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center pt-20">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: -20 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl text-center md:text-left relative overflow-hidden rounded-lg"
        >
          <img
            src={ProfileImg}
            alt="Profile"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-transparent mix-blend-overlay pointer-events-none"></div>
          <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.6)] pointer-events-none"></div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl"
        >
          <h2 className="text-blue-400 font-mono mb-4 tracking-wider">Hi, my name is</h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-slate-100">
            {data.name}.
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-slate-400">
            I'm a {data.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto md:mx-0">
            {data.summary}
          </p>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-12">
            <button
              onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              View Experience <ChevronRight size={18} />
            </button>
            <a
              href="https://drive.google.com/file/d/1wGieg5h02JMgQqfdWs26bAyltpUmr8Zl/view?usp=drive_link"
              download
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              <Download size={18} /> Download Resume
            </a>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-6 text-slate-400">
            <a href={`mailto:${data.email}`} className="hover:text-blue-400 transition-colors flex items-center gap-2">
              <Mail size={20} /> <span className="hidden sm:inline">{data.email}</span>
            </a>
            <a href={`tel:${data.phone.replace(/\s/g, '')}`} className="hover:text-blue-400 transition-colors flex items-center gap-2">
              <Phone size={20} /> <span className="hidden sm:inline">{data.phone}</span>
            </a>
            <a href="https://www.linkedin.com/in/soumya-sahoo-b58459276/" className="hover:text-blue-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://github.com/SoumyaSahoo14" className="hover:text-blue-400 transition-colors">
              <Github size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
