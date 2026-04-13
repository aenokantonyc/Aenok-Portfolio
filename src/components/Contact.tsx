import emailjs from "@emailjs/browser";
import { useRef, useState } from 'react';
import { Mail, Linkedin, Github, Twitter, Send, Clock, Code2 } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import ScrollReveal from './ScrollReveal';

const socialLinks = [
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/aenok-antony/' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/aenokantonyc' },
  { name: 'Twitter', icon: Twitter, href: 'https://x.com/Aenokantonyc' },
  { name: 'LeetCode', icon: Code2, href: 'https://leetcode.com/u/aenokantonyc/' },
];

const Contact = () => {
  const { toast } = useToast();
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;
    
    setIsSubmitting(true);

    emailjs.sendForm(
      "service_nmm5mfu",
      "template_jmz8wv8",
      form.current,
      "CAeeibJ99llsvDsE7"
    )
      .then(() => {
        toast({ title: "Message sent!", description: "Thanks for reaching out. I'll get back to you soon!" });
        form.current?.reset();
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.log(error);
        toast({ title: "Failed to send message", description: "Please try again or contact me directly via email." });
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-[120px] relative">
      <div className="packet-divider mb-16" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="section-heading text-center mb-4">Work With Me</h2>
            <p className="section-subheading mx-auto text-center mb-12">
              Open to internships, real-world projects, and conversations around Linux, backend systems, and cloud architecture.
            </p>
          </ScrollReveal>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left - Info */}
            <div className="space-y-8">
              <ScrollReveal delay={0.1} direction="left">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-5 h-5 text-muted-foreground" />
                    <h3 className="font-heading font-semibold">Availability</h3>
                  </div>
                  <div className="space-y-1 text-sm text-muted-foreground pl-8">
                    <p>Open to opportunities • Full-time / Internships</p>
                    <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                    <p>Weekend: Available for urgent inquiries</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2} direction="left">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <Mail className="w-5 h-5 text-muted-foreground" />
                    <h3 className="font-heading font-semibold">Contact</h3>
                  </div>
                  <a href="mailto:aenokantony1313@gmail.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors pl-8 block">
                    aenokantony1313@gmail.com
                  </a>
                  <div className="flex items-center gap-3 mt-4 pl-8">
                    {socialLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-lg border border-border hover:bg-secondary flex items-center justify-center transition-colors"
                        aria-label={link.name}
                      >
                        <link.icon className="w-4 h-4 text-muted-foreground" />
                      </a>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right - Form */}
            <ScrollReveal delay={0.3} direction="right">
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <label htmlFor="name" className="font-heading font-semibold mb-2 block">Your Name</label>
                  <Input id="name" name="name" placeholder="Your Name" required className="bg-secondary/50 border-border h-11" />
                </div>
                <div>
                  <label htmlFor="email" className="font-heading font-semibold mb-2 block">Your Email Address</label>
                  <Input id="email" name="email" type="email" placeholder="Your Email Address" required className="bg-secondary/50 border-border h-11" />
                </div>
                <div>
                  <label htmlFor="message" className="font-heading font-semibold mb-2 block">What would you like to discuss?</label>
                  <Textarea id="message" name="message" placeholder="Opportunity, collaboration, or technical discussion." required className="bg-secondary/50 border-border resize-none min-h-[120px]" />
                </div>
                <Button type="submit" disabled={isSubmitting} className="w-full h-11 btn-accent font-semibold">
                  {isSubmitting ? 'Sending...' : (
                    <span className="flex items-center gap-2"><Send className="w-4 h-4" />Send Email</span>
                  )}
                </Button>
                <p className="text-xs text-muted-foreground text-center">Your message goes directly to my email. I personally read and reply.</p>
                <p className="text-sm text-muted-foreground text-center">
                  Prefer email? You can directly write to:{' '}
                  <a href="mailto:aenokantony1313@gmail.com" className="underline hover:text-foreground transition-colors">aenokantony1313@gmail.com</a>
                </p>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
