import './GitHub.css';

const GITHUB_URL = 'https://github.com/simardeepgithub-1997';

const GitHub = () => {
  return (
    <section className="github-section section" id="github">
      <h2 className="section-title">GitHub</h2>
      <div className="github-card">
        <p>
          View my profile, contributions, and selected repositories for mobile and Web3 projects.
        </p>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          github.com/simardeepgithub-1997 →
        </a>
      </div>
    </section>
  );
};

export default GitHub;
