import { Link } from 'react-router-dom';
import './Hero.css';

const GITHUB_URL = 'https://github.com/simardeepgithub-1997';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-inner">
        <div className="hero-text">
          <h1 className="hero-name">Simardeep Singh</h1>
          <p className="hero-title">Senior React Native Engineer | Cross-Platform Mobile Architect</p>
          <p className="hero-summary">
            React Native engineer with 6.5+ years of experience building scalable mobile applications
            in fintech, crypto wallets, and Web3 infrastructure. I specialize in mobile architecture,
            wallet integrations, cross-chain interactions, and performance optimization.
          </p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              GitHub
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact
            </a>
          </div>
        </div>
        <div className="hero-photo">
          <img
            src="/simardeep.png"
            alt="Simardeep Singh"
            className="hero-photo-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
