import { useState } from "react";
import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";

function Contact() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ fullName, email, message }),
      });

      const data = await res.json();
      if (data.success) {
        alert("Message sent successfully!");
        setFullName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Failed to send message!");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while sending the message.");
    }
  };

  return (
    <>
      <section className="contact-page">
        <HeroPages name="Contact" />
        <div className="container">
          <div className="contact-div">
            <div className="contact-div__text">
              <h2>Need additional information?</h2>
              <p>
                At DriveNow Rentals, we specialize in offering reliable,
                comfortable, and affordable car rental solutions across India.
                Whether you're planning a weekend getaway, a business trip, or
                daily commutes, we’ve got the perfect vehicle for you.
              </p>
              <a href="/">
                <i className="fa-solid fa-phone"></i>&nbsp; (91)123-456-7890
              </a>
              <a href="/">
                <i className="fa-solid fa-envelope"></i>&nbsp; drive@away.com
              </a>
              <a href="/">
                <i className="fa-solid fa-location-dot"></i>&nbsp; Delhi, India
              </a>
            </div>
            <div className="contact-div__form">
              <form onSubmit={handleSubmit}>
                <label>
                  Full Name <b>*</b>
                </label>
                <input
                  type="text"
                  placeholder="E.g: abcde fghij"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />

                <label>
                  Email <b>*</b>
                </label>
                <input
                  type="email"
                  placeholder="youremail@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />

                <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea
                  placeholder="Write Here.."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>

                <button type="submit">
                  <i className="fa-solid fa-envelope-open-text"></i>&nbsp; Send
                  Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="book-banner">
          <div className="book-banner__overlay"></div>
          <div className="container">
            <div className="text-content">
              <h2>Contact us now to reserve your vehicle</h2>
              <span>
                <i className="fa-solid fa-phone"></i>
                <h3>(91)123-456-7890</h3>
              </span>
            </div>
          </div>
        </div>
        <Footer />
      </section>
    </>
  );
}

export default Contact;
