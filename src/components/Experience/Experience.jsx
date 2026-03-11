import './Experience.css';

const Experience = () => {
  return (
    <section className="experience section" id="experience">
      <h2 className="section-title">Experience Timeline</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-marker" />
          <div className="timeline-content">
            <h3>6.5+ years mobile development</h3>
            <p>Building and shipping production React Native applications.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-marker" />
          <div className="timeline-content">
            <h3>Multiple fintech & crypto apps shipped</h3>
            <p>End-to-end ownership from architecture to store release.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-marker" />
          <div className="timeline-content">
            <h3>Production apps on Google Play</h3>
            <p>Featured mobile apps available for download today.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
