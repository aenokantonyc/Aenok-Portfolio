import ScrollReveal from './ScrollReveal';
import certAI from '@/assets/cert-ai.png';
import certPython from '@/assets/cert-python.png';
import certDataScience from '@/assets/cert-datascience.jpg';
import certAdditional from '@/assets/cert-additional.png';

const achievements = [
  { title: 'Fundamentals of Artificial Intelligence', issuer: 'NPTEL', image: certAI },
  { title: 'Python Certification', issuer: 'GOOGLE', image: certPython },
  { title: 'Data Science', issuer: 'Edureka', image: certDataScience },
  { title: 'Computer Systems Security', issuer: 'MIT', image: certAdditional },
];

const Achievements = () => {
  return (
    <section id="achievements" className="pt-[120px] relative">
      <div className="packet-divider mb-16" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="section-heading text-center mb-4">Certifications</h2>
            <p className="section-subheading mx-auto text-center mb-12">
              Continuous learning and professional development
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-6">
            {achievements.map((cert, index) => (
              <ScrollReveal key={cert.title} delay={0.1 + index * 0.1}>
                <div className="border border-border rounded-lg overflow-hidden">
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full object-cover object-top"
                    />
                  </div>
                  <div className="p-4 text-center">
                    <h3 className="font-heading font-semibold text-sm mb-1 line-clamp-2">{cert.title}</h3>
                    <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
