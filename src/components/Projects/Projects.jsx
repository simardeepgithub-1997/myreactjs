import './Projects.css';
import gems01 from '../../assets/projects/gems-pocket/gems-01.jpg';
import gems02 from '../../assets/projects/gems-pocket/gems-02.jpg';
import gems03 from '../../assets/projects/gems-pocket/gems-03.jpg';
import gems04 from '../../assets/projects/gems-pocket/gems-04.jpg';
import gems05 from '../../assets/projects/gems-pocket/gems-05.jpg';
import gems06 from '../../assets/projects/gems-pocket/gems-06.jpg';
import triskel01 from '../../assets/projects/triskel/triskel-01.jpg';
import triskel02 from '../../assets/projects/triskel/triskel-02.jpg';
import triskel03 from '../../assets/projects/triskel/triskel-03.jpg';
import triskel04 from '../../assets/projects/triskel/triskel-04.jpg';
import triskel05 from '../../assets/projects/triskel/triskel-05.jpg';
import triskel06 from '../../assets/projects/triskel/triskel-06.jpg';
import tradestrike01 from '../../assets/projects/tradestrike/tradestrike-01.jpg';
import tradestrike02 from '../../assets/projects/tradestrike/tradestrike-02.jpg';
import tradestrike03 from '../../assets/projects/tradestrike/tradestrike-03.jpg';
import tradestrike04 from '../../assets/projects/tradestrike/tradestrike-04.jpg';
import tradestrike05 from '../../assets/projects/tradestrike/tradestrike-05.jpg';
import tradestrike06 from '../../assets/projects/tradestrike/tradestrike-06.jpg';
import aureus01 from '../../assets/projects/aureus/aureus-01.jpg';
import aureus02 from '../../assets/projects/aureus/aureus-02.jpg';
import aureus03 from '../../assets/projects/aureus/aureus-03.jpg';
import aureus04 from '../../assets/projects/aureus/aureus-04.jpg';
import aureus05 from '../../assets/projects/aureus/aureus-05.jpg';
import aureus06 from '../../assets/projects/aureus/aureus-06.jpg';
import shido01 from '../../assets/projects/shido/shido-01.jpg';
import shido02 from '../../assets/projects/shido/shido-02.jpg';
import shido03 from '../../assets/projects/shido/shido-03.jpg';
import shido04 from '../../assets/projects/shido/shido-04.jpg';
import shido05 from '../../assets/projects/shido/shido-05.jpg';
import shido06 from '../../assets/projects/shido/shido-06.jpg';

const FEATURED_APPS = [
  {
    industry: 'Crypto',
    name: 'Ancrypto Wallet/Gems Pocket',
    techStack: 'React Native, Web3, Wallet SDK',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.ancryptoWallet',
    description: 'Crypto wallet with multi-chain support and secure key management.',
    images: [gems01, gems02, gems03, gems04, gems05, gems06],
  },
  {
    name: 'Triskel',
    industry: 'Crypto',
    techStack: 'React Native, Blockchain',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.triskel',
    description: 'Blockchain-powered application for secure transactions.',
    images: [triskel01, triskel02, triskel03, triskel04, triskel05, triskel06],
  },
  {
    name: 'TradeStrike',
    industry: 'Crypto',
    techStack: 'React Native, REST APIs',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.tradestrike',
    description: 'Trading and fintech mobile experience.',
    images: [tradestrike01, tradestrike02, tradestrike03, tradestrike04, tradestrike05, tradestrike06],
  },
  {
    name: 'Aureus Wallet',
    industry: 'Crypto',
    techStack: 'React Native, Web3',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.aureuswallet',
    description: 'Digital asset wallet with cross-chain capabilities.',
    images: [aureus01, aureus02, aureus03, aureus04, aureus05, aureus06],
  },
  {
    name: 'Shido Wallet',
    industry: 'Crypto',
    techStack: 'React Native, Web3, Wallet',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.shido.wallet',
    description: 'Web3 wallet for decentralized finance and token management.',
    images: [shido01, shido02, shido03, shido04, shido05, shido06],
  },
];

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
            {app.images?.length ? (
              <div className="project-gallery" aria-label={`${app.name} screenshots`}>
                {app.images.map((img, index) => (
                  <img
                    key={`${app.name}-img-${index + 1}`}
                    src={img}
                    alt={`${app.name} screenshot ${index + 1}`}
                    className="project-gallery-image"
                    loading="lazy"
                  />
                ))}
              </div>
            ) : null}
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
