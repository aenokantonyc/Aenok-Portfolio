import { ExternalLink, Github } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const projects = [
  {
    title: 'Inverse Defender',
    description: 'A game where players defend by predicting enemy attacks and optimizing defense strategies in real-time.',
    tech: ['Python', 'Pygame', 'AI Algorithms'],
    special: 'Strengthened problem-solving and algorithmic thinking while blending creativity with coding logic.',
  },
  {
    title: 'Multiplayer Tic-Tac-Toe',
    description: 'Web-based multiplayer game with real-time interactive updates.',
    tech: ['Python', 'Streamlit', 'GitHub'],
    special: 'Learned cloud-ready app deployment, UI/UX for web apps, and collaborative coding practices.',
  },
  {
    title: 'Supply Chain Tracker',
    description: 'Tracks inventory, shipments, and deliveries with real-time updates and analytics.',
    tech: ['Python', 'FastAPI', 'SQL/NoSQL', 'Streamlit'],
    special: 'Exposed to real-world system integration, backend design, and scalable applications.',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="pt-[120px] relative">
      <div className="packet-divider mb-16" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="section-heading text-center mb-4">Featured Projects</h2>
            <p className="section-subheading mx-auto text-center mb-12">
              Building real-world solutions through code and creativity
            </p>
          </ScrollReveal>

          <div className="space-y-8">
            {projects.map((project, index) => (
              <ScrollReveal key={project.title} delay={0.1 + index * 0.1}>
                <div className="border-b border-border pb-8 last:border-0">
                  <h3 className="font-heading font-semibold text-xl mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-3">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full border border-border text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <p className="text-sm text-muted-foreground italic">✦ {project.special}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <div className="text-center mt-12">
              <a
                href="https://github.com/Silveraxe69"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 btn-outline text-sm"
              >
                <Github className="w-4 h-4" />
                View More on GitHub
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Projects;
