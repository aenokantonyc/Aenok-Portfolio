import ScrollReveal from './ScrollReveal';
import { MapPin } from 'lucide-react';

const stats = [
  { value: '5+', label: 'Projects Built' },
  { value: '5+', label: 'Certifications' },
];

const About = () => {
  return (
    <section id="about" className="pt-[120px] relative">
      <div className="packet-divider mb-16" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="section-heading text-center mb-12">
              About Me
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="text-center mb-12">
              <h3 className="font-heading font-bold text-2xl mb-2">Aenok Antony C</h3>
              <p className="text-muted-foreground font-medium mb-2">Full Stack Software Developer</p>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">SNS College of Engineering</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-center text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto mb-4">
              I am a Computer Science student passionate about building real-world applications and solving meaningful problems through technology. My focus lies in full stack development, where I design intuitive user interfaces, develop scalable backend systems, and ensure seamless integration across the entire application flow.
            </p>
            <p className="text-center text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto mb-12">
              I enjoy working in team environments, taking initiative in leadership, and contributing to structured and efficient project execution. I am continuously learning and building to grow as a developer who can create impactful and reliable digital solutions.
            </p>
          </ScrollReveal>

          {/* Stats */}
          <div className="flex justify-center gap-12">
            {stats.map((stat, index) => (
              <ScrollReveal key={stat.label} delay={0.2 + index * 0.05}>
                <div className="text-center">
                  <p className="font-heading font-bold text-3xl mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
