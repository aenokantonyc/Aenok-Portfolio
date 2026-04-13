import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import profilePhoto from '@/assets/profile-photo.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden bg-black">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-16">
            {/* Profile Photo - Left */}
            <motion.div 
              className="relative flex-shrink-0 order-1 md:order-1"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Subtle ring */}
              <div className="absolute -inset-3 rounded-full border border-white/20 animate-spin" style={{ animationDuration: '25s' }} />
              
              {/* Profile image */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-white/20 shadow-lg">
                <img
                  src={profilePhoto}
                  alt="Aenok Antony C"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Status indicator */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-sm border border-white/20 shadow-sm">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-green-400/50 animate-[glow-pulse_2s_ease-in-out_infinite]"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500 shadow-[0_0_6px_2px_rgba(34,197,94,0.5)] animate-[glow-pulse_2s_ease-in-out_infinite]"></span>
                </span>
                <span className="text-xs font-medium text-white">Available</span>
              </div>
            </motion.div>

            {/* Content - Right */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-2xl order-2 md:order-2">
              <motion.p 
                className="text-base font-medium text-white/50 tracking-wide uppercase mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Computer Science Student • Full Stack Software Developer
              </motion.p>

              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-8 tracking-tight text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Aenok Antony C
              </motion.h1>

              <motion.p 
                className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Building scalable, user-focused applications with strong foundations in frontend development, system design, and backend integration.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row items-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <a href="#projects" className="btn-accent">
                  View My Work
                </a>
                <a href="#contact" className="btn-outline">
                  Get In Touch
                </a>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            className="flex justify-center mt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a
              href="#about"
              className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors group"
            >
              <span className="text-xs font-medium uppercase tracking-wider text-white/40">Scroll</span>
              <ArrowDown className="w-5 h-5 animate-bounce group-hover:translate-y-1 transition-transform text-white/40" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
