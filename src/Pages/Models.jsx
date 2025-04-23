import Footer from "../components/Footer";
import HeroPages from "../components/HeroPages";
import { CAR_DATA } from "../components/CarData.js"; // adjust path as needed
import { Link } from "react-router-dom";

function Models() {
  return (
    <>
      <section className="models-section">
        <HeroPages name="Vehicle Models" />
        <div className="container">
          <div className="models-div">
            {CAR_DATA.flat().map((car, index) => (
              <div className="models-div__box" key={index}>
                <div className="models-div__box__img">
                  <img src={car.img} alt={car.name} />
                  <div className="models-div__box__descr">
                    <div className="models-div__box__descr__name-price">
                      <div className="models-div__box__descr__name-price__name">
                        <p>{car.name}   </p>
                        <span>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </span>
                      </div>
                      <div className="models-div__box__descr__name-price__price">
                        <h4>₹{car.price}</h4>
                        <p>per day</p>
                      </div>
                    </div>
                    <div className="models-div__box__descr__name-price__details">
                      <span>
                        <i className="fa-solid fa-car-side"></i> &nbsp; {car.mark}
                      </span>
                      <span style={{ textAlign: "right" }}>
                        {car.persons} persons &nbsp; <i className="fa-solid fa-car-side"></i>
                      </span>
                      <span>
                        <i className="fa-solid fa-car-side"></i> &nbsp; {car.transmission}
                      </span>
                      <span style={{ textAlign: "right" }}>
                        {car.fuel} &nbsp; <i className="fa-solid fa-car-side"></i>
                      </span>
                    </div>
                    <div className="models-div__box__descr__name-price__btn">
                      <Link onClick={() => window.scrollTo(0, 0)} to="/">
                        Book Ride
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Models;
