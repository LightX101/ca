import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";

function Contact() {
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
                daily commutes, we’ve got the perfect vehicle for you. With a
                decade of experience, our team ensures a seamless booking
                experience, well-maintained vehicles, and 24/7 customer support.
                Your journey is our priority.
              </p>
              <a href="/">
                <i className="fa-solid fa-phone"></i>&nbsp; (91)123-456-7890
              </a>
              <a href="/">
                <i className="fa-solid fa-envelope"></i>&nbsp; drive@away.com
              </a>
              <a href="/">
                <i className="fa-solid fa-location-dot"></i>&nbsp; Delhi,India
              </a>
            </div>
            <div className="contact-div__form">
              <form>
                <label>
                  Full Name <b>*</b>
                </label>
                <input type="text" placeholder='E.g: abcde fghij'></input>

                <label>
                  Email <b>*</b>
                </label>
                <input type="email" placeholder="youremail@example.com"></input>

                <label>
                  Tell us about it <b>*</b>
                </label>
                <textarea placeholder="Write Here.."></textarea>

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
