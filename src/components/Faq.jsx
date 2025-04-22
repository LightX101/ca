import { useState } from "react";

function Faq() {
  const [activeQ, setActiveQ] = useState("q1");

  const openQ = (id) => {
    setActiveQ(activeQ === id ? "" : id);
  };

  const getClassAnswer = (id) => {
    return activeQ === id ? "active-answer" : "";
  };

  const getClassQuestion = (id) => {
    return activeQ === id ? "active-question" : "";
  };

  return (
    <>
      <section className="faq-section">
        <div className="container">
          <div className="faq-content">
            <div className="faq-content__title">
              <h5>FAQ</h5>
              <h2>Frequently Asked Questions</h2>
              <p>
                Frequently Asked Questions About the Car Rental Booking Process
                on Our Website: Answers to Common Concerns and Inquiries.
              </p>
            </div>

            <div className="all-questions">
              <div className="faq-box">
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__question  ${getClassQuestion("q1")}`}
                >
                  <p>1. How can I find the best deals for renting a vehicle?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__answer ${getClassAnswer("q1")}`}
                >
                  To find the best deals for renting a vehicle, it's important
                  to compare prices from various sources. Online platforms like
                  Expedia, Kayak, and Travelocity allow you to easily view
                  different options and make informed choices. You can also sign
                  up for email notifications and follow the companies on social
                  media to catch any limited-time offers or discounts.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__question ${getClassQuestion("q2")}`}
                >
                  <p>
                    2.What makes it important to compare different rental
                    options?
                  </p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__answer ${getClassAnswer("q2")}`}
                >
                  Comparing different rental options ensures that you get the
                  best value for your money. It allows you to find the most
                  affordable rates, additional services, or better vehicle
                  models that meet your specific needs. By taking the time to
                  research and compare, you can make a more informed decision
                  and get a rental that fits your budget and preferences.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__question ${getClassQuestion("q3")}`}
                >
                  <p>3. How can I find such low prices on cars?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__answer ${getClassAnswer("q3")}`}
                >
                  Book early: Booking in advance is a great way to secure lower
                  prices. Rental rates tend to be cheaper the earlier you book. <br /> Consider off-location rentals: Renting from a
                  location outside of high-traffic areas like airports can
                  sometimes offer better rates. prices.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
