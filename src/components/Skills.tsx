import ScrollReveal from './ScrollReveal';

const technicalSkills = [
  'Frontend Development', 'UI/UX Design', 'Full Stack Development', 'System Architecture',
  'Backend Integration', 'API Design', 'Python', 'Git/GitHub',
];

const professionalSkills = [
  'Problem Solving', 'Technical Communication', 'Design Thinking', 'Project Planning',
  'Team Leadership', 'Documentation', 'Rapid Learning', 'Presentation Skills',
];

const Skills = () => {
  return (
    <section id="skills" className="pt-[120px] relative">
      <div className="packet-divider mb-16" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="section-heading text-center mb-4">Skills & Expertise</h2>
            <p className="section-subheading mx-auto text-center mb-12">
              A blend of technical proficiency and professional capabilities
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-12">
            <ScrollReveal delay={0.1}>
              <div>
                <h3 className="font-heading font-semibold text-lg mb-6 text-center">Technical</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {technicalSkills.map((skill) => (
                    <span key={skill} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div>
                <h3 className="font-heading font-semibold text-lg mb-6 text-center">Professional</h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {professionalSkills.map((skill) => (
                    <span key={skill} className="skill-badge">{skill}</span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
