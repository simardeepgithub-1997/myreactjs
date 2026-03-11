import './About.css';

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section-title">About</h2>
      <div className="about-content">
        <p>
          I am a <strong>React Native engineer</strong> with <strong>6.5+ years</strong> of experience
          building scalable mobile applications, with a focus on <strong>fintech</strong>,{' '}
          <strong>crypto wallets</strong>, and <strong>Web3</strong> infrastructure.
        </p>
        <p>
          My work spans end-to-end mobile architecture, from secure wallet integrations and
          cross-chain blockchain interactions to performance optimization and native Android/iOS
          modules. I have shipped multiple production apps available on Google Play.
        </p>
        <p>
          I also use <strong>AI-driven development tools</strong> such as Cursor AI and Antigravity
          to accelerate scaffolding, refactoring, and debugging—while keeping architecture,
          security, optimization, and production quality under direct engineering control.
        </p>
      </div>
    </section>
  );
};

export default About;
