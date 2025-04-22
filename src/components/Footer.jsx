function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="footer-content">
            <ul className="footer-content__1">
              <li>
                <span>Drive</span> Away
              </li>
              <li>
              We offer a wide selection of vehicles for every occasion. Whether it's a quick trip or a long drive, we’ve got the perfect ride for you.
              </li>
              <li>
                <a href="tel:1234567890">
                  <i className="fa-solid fa-phone"></i> &nbsp; (91)123-456-7890
                </a>
              </li>

              <li>
                <a
                  href="mailto: 
                drive@away.com"
                >
                  <i className="fa-solid fa-envelope"></i>
                  &nbsp;drive@away.com
                </a>
              </li>

              <li>
                <a
                  style={{ fontSize: "14px" }}
                  target="_blank"
                  rel="noreferrer"
                  href="/"
                >
                  
                </a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Company</li>
              <li>
                <a href="#home">Gallery</a>
              </li>
              <li>
                <a href="#home">Careers</a>
              </li>
              <li>
                <a href="#home">Mobile</a>
              </li>
              <li>
                <a href="#home">Blog</a>
              </li>
              <li>
                <a href="#home">How we work</a>
              </li>
            </ul>

            <ul className="footer-content__2">
              <li>Working Hours</li>
              <li>Mon - Fri: 8:00AM - 11:59:00PM</li>
              <li>Sat: 11:00AM - 11:59:00PM</li>
              <li>Sun: Closed</li>
            </ul>

            <ul className="footer-content__2">
              <li>Subscription</li>
              <li>
                <p>Subscribe to our newsletter for the latest news and exclusive updates straight to your inbox</p>
              </li>
              <li>
                <input type="email" placeholder="Enter Email Address"></input>
              </li>
              <li>
                <button className="submit-email">Submit</button>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
