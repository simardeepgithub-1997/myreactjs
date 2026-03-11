import './AIWorkflow.css';

const AIWorkflow = () => {
  return (
    <section className="ai-workflow section" id="ai-workflow">
      <h2 className="section-title">AI-Assisted Development</h2>
      <div className="ai-workflow-content">
        <p>
          I use <strong>Cursor AI</strong> and <strong>Antigravity</strong> to speed up development
          workflows. AI supports:
        </p>
        <ul className="ai-list">
          <li>Rapid scaffolding</li>
          <li>Code refactoring</li>
          <li>Debugging assistance</li>
          <li>Faster prototyping</li>
        </ul>
        <p>
          <strong>Architecture</strong>, <strong>security</strong>, <strong>optimization</strong>,
          and <strong>production code quality</strong> remain under direct engineering control—
          AI augments speed without replacing disciplined design and review.
        </p>
      </div>
    </section>
  );
};

export default AIWorkflow;
