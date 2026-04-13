import { ExternalLink } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const experiences = [
  {
    category: 'Workshops & Internships',
    items: [
      {
        title: 'GEN-AI Workshop',
        organization: 'MindFulEdu, SNS College of Engineering',
        description: 'Explored generative AI technologies and applications',
        linkedinUrl: 'https://www.linkedin.com/posts/aenok-antony_generativeai-ai-machinelearning-activity-7323632938787483649-TVKZ',
      },
      {
        title: 'Tech Workshop',
        organization: 'Mob Fix, Bangalore',
        description: 'Hands-on technical learning experience',
        linkedinUrl: 'https://www.linkedin.com/posts/aenok-antony_mobfixer-technicalworkshop-chipleveltraining-activity-7413851926087413760-vgpY',
      },
    ],
  },
  {
    category: 'Leadership & Events',
    items: [
      {
        title: 'Code Cubicle 5.0 Hackathon',
        organization: 'Microsoft Bangalore',
        description: 'Competed in the Grand Finale',
        linkedinUrl: 'https://www.linkedin.com/posts/aenok-antony_sharing-my-journey-to-the-grand-finale-of-activity-7381281717816336385-faF4',
      },
      {
        title: 'Fans Meet Event',
        organization: '"Madhraasi" Movie Promotion, SNS College',
        description: 'Organized and managed promotional event',
        linkedinUrl: 'https://www.linkedin.com/posts/aenok-antony_fans-meet-for-madhraasi-promotion-organized-activity-7368872827493593089-rgQp',
      },
      {
        title: 'Demo Branding Project',
        organization: 'EXTINCT (Gold & Red Editions)',
        description: 'Led creative branding initiatives',
        linkedinUrl: 'https://www.linkedin.com/posts/aenok-antony_bytexl-designdemo-branding-activity-7387081124457644032-l1bY',
      },
    ],
  },
  {
    category: 'Speaking & Presentations',
    items: [
      {
        title: 'Academic Presentation',
        organization: 'SNS College of Engineering',
        description: 'Conformal Mappings & Their Applications',
        linkedinUrl: 'https://www.linkedin.com/posts/aenok-antony_vectorcalculus-computerengineering-publicspeaking-activity-7305232913363578880-c504',
      },
      {
        title: 'TED Talk',
        organization: 'SNS College of Engineering',
        description: 'Innovation, Leadership & Career Growth',
        linkedinUrl: 'https://www.linkedin.com/posts/aenok-antony_tedtalk-innovation-leadership-activity-7366830912749150209-wLkM',
      },
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="pt-[120px] relative">
      <div className="packet-divider mb-16" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="section-heading text-center mb-4">Experience & Activities</h2>
            <p className="section-subheading mx-auto text-center mb-12">
              Learning through workshops, events, and leadership opportunities
            </p>
          </ScrollReveal>

          <div className="space-y-16">
            {experiences.map((category, catIndex) => (
              <ScrollReveal key={category.category} delay={0.1 + catIndex * 0.1}>
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-6 border-b border-border pb-3">
                    {category.category}
                  </h3>

                  <div className="space-y-6">
                    {category.items.map((item) => (
                      <div key={item.title} className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="font-heading font-semibold mb-1">{item.title}</h4>
                          <p className="text-sm text-muted-foreground mb-1">{item.organization}</p>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                        <a
                          href={item.linkedinUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 p-2 rounded-lg hover:bg-secondary transition-colors"
                          aria-label="View on LinkedIn"
                        >
                          <ExternalLink className="w-4 h-4 text-muted-foreground" />
                        </a>
                      </div>
                    ))}
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

export default Experience;
