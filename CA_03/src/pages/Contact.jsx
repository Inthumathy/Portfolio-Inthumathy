import { useState } from "react";

function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    setStatus("Sending...");

    // Your exact formspree link
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
        form.reset(); // Clears form boxes completely
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
        <div className="alert success-alert" style={{color: 'green', padding: '10px', textAlign: 'center'}}>
          🎉 Message Sent Successfully! Check your Formspree dashboard now.
        </div>
      )}
      
      {status === "ERROR" && (
        <div className="alert error-alert" style={{color: 'red', padding: '10px', textAlign: 'center'}}>
          ❌ Submission failed. Please verify your internet or endpoint link.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Inthumathy" 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Email Address</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="mathyinthu613@gmail.com" 
            required 
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea 
            id="message" 
            name="message" 
            rows="5" 
            placeholder="Write your suggestions here..." 
            required
          ></textarea>
        </div>

        <button type="submit" disabled={status === "Sending..."}>
          {status === "Sending..." ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;