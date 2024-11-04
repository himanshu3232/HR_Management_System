import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(!submitted);
  };

  return (
    <>
      <main>
        <section id="contact">
          <h2>Contact Us</h2>
          <form id="contactForm" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              aria-label="Your Name"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              aria-label="Your Email"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              aria-label="Your Message"
            />
            <button type="submit">Send Message</button>
          </form>
          {submitted && <p>Thank you for contacting us!</p>}
        </section>
      </main>
    </>
  );
}
