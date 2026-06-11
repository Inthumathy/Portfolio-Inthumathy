import "../styles/Contact.css";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Me</h1>

      <p>
        Feel free to contact me for internships,
        projects, or collaborations.
      </p>

      {/* Renders your modular, functional feedback form */}
      <ContactForm />
    </div>
  );
}

export default Contact;