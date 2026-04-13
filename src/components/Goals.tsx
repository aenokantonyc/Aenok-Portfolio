import ScrollReveal from './ScrollReveal';

const shortTermGoals = [
  'Strengthen Full Stack Development skills',
  'Master system design and application flow',
  'Build impactful real-world projects',
];

const longTermGoals = [
  'Become a Full Stack Engineer with strong system design expertise',
  'Lead and manage development teams',
  'Build scalable products with real-world impact',
];

const Goals = () => {
  return (
    <section id="goals" className="pt-[120px] relative">
      <div className="packet-divider mb-16" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="section-heading text-center mb-4">My Goals</h2>
            <p className="section-subheading mx-auto text-center mb-12">
              A roadmap to my aspirations and growth
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Short Term Goals */}
              <div>
                <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-6">Short Term</h3>
                <div className="space-y-4">
                  {shortTermGoals.map((goal, index) => (
                    <div key={index} className="flex items-start gap-3 py-2 border-b border-border last:border-0">
                      <span className="text-muted-foreground text-sm font-medium mt-0.5">0{index + 1}</span>
                      <span className="font-medium">{goal}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Long Term Goals */}
              <div>
                <h3 className="text-sm uppercase tracking-widest text-muted-foreground mb-6">Long Term</h3>
                <div className="space-y-4">
                  {longTermGoals.map((goal, index) => (
                    <div key={index} className="flex items-start gap-3 py-2 border-b border-border last:border-0">
                      <span className="text-muted-foreground text-sm font-medium mt-0.5">0{index + 1}</span>
                      <span className="font-medium">{goal}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Goals;
