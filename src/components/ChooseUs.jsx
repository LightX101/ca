import MainImg from "../images/chooseUs/main.png";
import Box1 from "../images/chooseUs/icon1.png";
import Box2 from "../images/chooseUs/icon2.png";
import Box3 from "../images/chooseUs/icon3.png";

function ChooseUs() {
  return (
    <>
      <section className="choose-section">
        <div className="container">
          <div className="choose-container">
            <img
              className="choose-container__img"
              src={MainImg}
              alt="car_img"
            />
            <div className="text-container">
              <div className="text-container__left">
                <h4>Why Choose Us?</h4>
                <h2>Unbeatable Value & Deals</h2>
                <p>
                Discover exceptional deals that offer the best value for your money. We're committed to bringing you the most competitive prices, ensuring you get top-quality services and products without exceeding your budget. Our exclusive offers are designed to give you the best renting experience possible, so don't miss out on the chance to save big!
                </p>
                <a href="#home">
                  Find Details &nbsp;
                  <i className="fa-solid fa-angle-right"></i>
                </a>
              </div>
              <div className="text-container__right">
                <div className="text-container__right__box">
                  <img src={Box1} alt="car-img" />
                  <div className="text-container__right__box__text">
                    <h4>Cross Country</h4>
                    <p>
                    Upgrade your journey with our premium vehicles, designed for unforgettable cross-country adventures. Experience smooth rides and scenic routes like never before.
                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box2} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Transparent Pricing</h4>
                    <p>
                    Get everything you need at one clear price with no hidden fees. Our all-inclusive pricing ensures a hassle-free experience from start to finish.

                    </p>
                  </div>
                </div>
                <div className="text-container__right__box">
                  {" "}
                  <img src={Box3} alt="coin-img" />
                  <div className="text-container__right__box__text">
                    <h4>Protection You Can Trust</h4>
                    <p>
                    Drive with confidence knowing you're covered by our comprehensive protection plan. We prioritize your safety and peace of mind with transparent and reliable coverage.
                    </p>
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

export default ChooseUs;
