import { useState } from "react";

function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus("Sending...");

    const FORMSPREE_LINK = "https://formspree.io/f/xdavllpz";

    try {
      const response = await fetch(FORMSPREE_LINK, {
        method: "POST",
        body: new FormData(form),
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("SUCCESS");
        form.reset();
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <div className="form-wrapper">
      {status === "SUCCESS" && (
        <div className="alert success-alert">
          🎉 Thank you! Your message has been sent successfully.
        </div>
      )}
      
      {status === "ERROR" && (
        <div className="alert error-alert">
          ❌ Oops! Something went wrong. Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit} className="feedback-form">
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="John" 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Email Address</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="johndio52@gmail.com" 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea 
            id="message" 
            name="message" 
            rows="5" 
            placeholder="Write your suggestions, project details, or internship opportunities here..." 
            required
          ></textarea>
        </div>

        <button 
          type="submit" 
          className="submit-btn" 
          disabled={status === "Sending..."}
        >
          {status === "Sending..." ? "Sending Message..." : "Submit Feedback"}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;