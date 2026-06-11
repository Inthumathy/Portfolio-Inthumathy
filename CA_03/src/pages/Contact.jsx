import "../styles/Contact.css";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contact Me</h1>
        <p className="contact-subtitle">
          Feel free to contact me for internships, projects, or collaborations.
        </p>
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;