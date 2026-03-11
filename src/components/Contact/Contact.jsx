import './Contact.css';

const PHONE = '+91 8837718140';
const EMAIL = 'simardeep1to9@gmail.com';
const GITHUB_URL = 'https://github.com/simardeepgithub-1997';
const LOCATION = 'Amritsar, Punjab';

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section-title">Contact</h2>
      <div className="contact-info">
        <a href={`tel:${PHONE}`} className="contact-item">
          <span className="contact-label">Phone</span>
          <span className="contact-value">{PHONE}</span>
        </a>
        <a href={`mailto:${EMAIL}`} className="contact-item">
          <span className="contact-label">Email</span>
          <span className="contact-value">{EMAIL}</span>
        </a>
        <div className="contact-item contact-item-static">
          <span className="contact-label">Location</span>
          <span className="contact-value">{LOCATION}</span>
        </div>
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="contact-item">
          <span className="contact-label">GitHub</span>
          <span className="contact-value">simardeepgithub-1997</span>
        </a>
      </div>
    </section>
  );
};

export default Contact;
