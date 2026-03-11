import './EngineeringStrengths.css';

const STRENGTHS = [
  'Mobile architecture design',
  'Cross-platform development',
  'Crypto wallet development',
  'Web3 integrations',
  'Performance optimization',
  'Native module integration',
  'Secure blockchain transactions',
  'Scalable API integrations',
];

const EngineeringStrengths = () => {
  return (
    <section className="strengths section" id="strengths">
      <h2 className="section-title">Engineering Strengths</h2>
      <ul className="strengths-grid">
        {STRENGTHS.map((item) => (
          <li key={item} className="strength-item">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default EngineeringStrengths;
