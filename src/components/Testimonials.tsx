import { Quote } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import testimonialKiran from '@/assets/testimonial-kiran.jpg';
import testimonialVarun from '@/assets/testimonial-varun.jpg';
import testimonialHackathon from '@/assets/testimonial-hackathon.jpg';
import testimonialHarippriya from '@/assets/testimonial-harippriya.jpg';

const testimonials = [
  {
    quote: "Aenok demonstrates strong problem-solving skills with a passion for software development, UI design, and system architecture.",
    author: "Kiran Vincent C",
    role: "Director of Sales, MobFix Bangalore",
    image: testimonialKiran,
  },
  {
    quote: "Aenok's curiosity, patience, and supportive nature make collaborating with him genuinely enjoyable.",
    author: "Harippriya R",
    role: "Teammate & Engineering Peer",
    image: testimonialHarippriya,
  },
  {
    quote: "Aenok blends logical thinking with creativity in software development, UI design, and system architecture.",
    author: "Varun Vincent C",
    role: "Close Friend & Engineering Peer",
    image: testimonialVarun,
  },
  {
    quote: "Aenok's enthusiasm for hackathons and collaborative problem-solving makes him a valuable team member. Always eager to learn and contribute.",
    author: "Hackathon Organizer",
    role: "Code Cubicle 5.0",
    image: testimonialHackathon,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-[120px] relative">
      <div className="packet-divider mb-16" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="section-heading text-center mb-4">What People Say</h2>
            <p className="section-subheading mx-auto text-center mb-12">
              Feedback from mentors, colleagues, and collaborators
            </p>
          </ScrollReveal>

          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <ScrollReveal key={index} delay={0.1 + index * 0.1}>
                <div className="border-b border-border pb-8 last:border-0">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-border flex-shrink-0">
                      <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="text-muted-foreground leading-relaxed mb-3 italic">
                        "{testimonial.quote}"
                      </p>
                      <p className="font-heading font-semibold text-sm">{testimonial.author}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                    </div>
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

export default Testimonials;
