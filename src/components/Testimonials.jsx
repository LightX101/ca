import Img2 from "../images/testimonials/pfp1.png";
import Img3 from "../images/testimonials/pfp2.png";

function Testimonials() {
  return (
    <>
      <section className="testimonials-section">
        <div className="container">
          <div className="testimonials-content">
            <div className="testimonials-content__title">
              <h4>Trusted by Many</h4>
              <h2>What Our Clients Say</h2>
              <p>
              Don't just take our word for it—hear directly from the people who've experienced our services! Our clients are passionate about the difference we've made, and their testimonials speak volumes. Read their stories and see why we’re the go-to choice for exceptional service and results.
              </p>
            </div>

            <div className="all-testimonials">
              <div className="all-testimonials__box">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                "Renting a car from this website was a smooth experience. The booking process was simple, and the car was in excellent condition. Will definitely recommend!"
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={Img2} alt="user_img" />
                    <span>
                      <h4>Aarav Patel</h4>
                      <p>Mumbai</p>
                    </span>
                  </div>
                </div>
              </div>

              <div className="all-testimonials__box box-2">
                <span className="quotes-icon">
                  <i className="fa-solid fa-quote-right"></i>
                </span>
                <p>
                "Our experience with this car rental website was fantastic. The booking process was simple, and the car was in great condition, making our trip even more enjoyable. Affordable rates and excellent service—highly recommend!"
                </p>
                <div className="all-testimonials__box__name">
                  <div className="all-testimonials__box__name__profile">
                    <img src={Img3} alt="user_img" />
                    <span>
                      <h4>Rohan Sharma</h4>
                      <p>Delhi</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonials;
