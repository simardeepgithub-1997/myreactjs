import './Projects.css';

const FEATURED_APPS = [
  {
    name: 'Ancrypto Wallet',
    industry: 'Crypto',
    techStack: 'React Native, Web3, Wallet SDK',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ancryptoWallet',
    description: 'Crypto wallet with multi-chain support and secure key management.',
  },
  {
    name: 'Triskel',
    industry: 'Crypto',
    techStack: 'React Native, Blockchain',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.triskel',
    description: 'Blockchain-powered application for secure transactions.',
  },
  {
    name: 'TradeStrike',
    industry: 'Crypto',
    techStack: 'React Native, REST APIs',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.tradestrike',
    description: 'Trading and fintech mobile experience.',
  },
  {
    name: 'Aureus Wallet',
    industry: 'Crypto',
    techStack: 'React Native, Web3',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.aureuswallet',
    description: 'Digital asset wallet with cross-chain capabilities.',
  },
  {
    name: 'Shido Wallet',
    industry: 'Crypto',
    techStack: 'React Native, Web3, Wallet',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.shido.wallet',
    description: 'Web3 wallet for decentralized finance and token management.',
  },
];

import './Projects.css';

const Projects = () => {
  return (
    <section className="projects section" id="projects">
      <h2 className="section-title">Featured Mobile Apps</h2>
      <div className="projects-grid">
        {FEATURED_APPS.map((app) => (
          <article key={app.name} className="project-card">
            <div className="project-card-header">
              <h3 className="project-name">{app.name}</h3>
              <span className={`project-industry project-industry-${app.industry.toLowerCase()}`}>
                {app.industry}
              </span>
            </div>
            <p className="project-tech">{app.techStack}</p>
            <p className="project-desc">{app.description}</p>
            <a
              href={app.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View on Play Store →
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
