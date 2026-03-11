import './Skills.css';

const PRIMARY = [
  'React Native',
  'Blockchain',
  'Smart Contracts',
  'Web3',
  'Wallet integrations',
  'Performance optimization',
  'Native Android/iOS integration',
  'JavaScript',
  'TypeScript',
  'REST APIs',
  'Firebase',
  'Web3',
  'Wallet integrations',
  'Performance optimization',
  'Native Android/iOS integration',
];

const SECONDARY = ['React.js', 'Node.js','Next.js'];

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section-title">Skills</h2>
      <div className="skills-grid">
        <div className="skills-group">
          <h3 className="skills-group-title">Primary</h3>
          <ul className="skill-cards">
            {PRIMARY.map((name) => (
              <li key={name} className="skill-card">
                <span className="skill-icon" aria-hidden="true">◆</span>
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="skills-group">
          <h3 className="skills-group-title">Secondary</h3>
          <ul className="skill-cards">
            {SECONDARY.map((name) => (
              <li key={name} className="skill-card">
                <span className="skill-icon" aria-hidden="true">◇</span>
                <span>{name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
