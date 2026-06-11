function ContactForm() {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Submitted Successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>

      <input
        type="text"
        placeholder="Enter Your Name"
        required
      />

      <br /><br />

      <input
        type="email"
        placeholder="Enter Your Email"
        required
      />

      <br /><br />

      <textarea
        placeholder="Enter Your Message"
        rows="5"
        required
      />

      <br /><br />

      <button type="submit">
        Send Message
      </button>

    </form>
  );
}

export default ContactForm;