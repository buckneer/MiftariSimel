import "./Footer.scss";

// icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import {faPhone, faEnvelope, faPrint, faHome} from "@fortawesome/free-solid-svg-icons";
import logo from '../../logo.svg';
import {Link} from "react-router-dom";

function Footer() {
  return (
      <div className="section Footer">
        <footer className="text-center text-lg-start bg-light ">
          <section
              className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
          >
            <div className="me-5 d-none d-lg-block text-primary">
              <span className="fw-bold">Get connected with me on social networks:</span>
            </div>
            <div className="text-primary">
              <a href="https://www.facebook.com/simel.miftari" className="me-4 text-reset">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="mailto:miftarisimel@gmail.com" className="me-4 text-reset">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href="https://www.instagram.com/ssiimmel/" className="me-4 text-reset">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.linkedin.com/in/simel-miftari-b3864215a/" className="me-4 text-reset">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="https://www.github.com/buckneer/" className="me-4 text-reset">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </section>
          <section className="">
            <div className="container text-center text-md-start mt-5">

              <div className="row mt-3">

                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                  <h6 className="text-uppercase fw-bold mt-5 text-primary">
                    <img src={logo} alt="logo"/>
                  </h6>

                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                  <h6 className="text-uppercase fw-bold mb-4 text-primary">
                    Projects
                  </h6>
                  <p>
                    <Link to="/portfolio" className="text-reset">Android</Link>
                  </p>
                  <p>
                    <Link to="/portfolio" className="text-reset">React</Link>
                  </p>
                  <p>
                    <Link to="/portfolio" className="text-reset">Vue</Link>
                  </p>
                  <p>
                    <Link to="/portfolio" className="text-reset">Native</Link>
                  </p>
                </div>



                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                  <h6 className="text-uppercase fw-bold mb-4 text-primary">
                    Useful links
                  </h6>
                  <p>
                    <Link to="/" className="text-reset">Home</Link>
                  </p>
                  <p>
                    <Link to="/services" className="text-reset">Services</Link>
                  </p>
                  <p>
                    <Link to="/about" className="text-reset">About</Link>
                  </p>
                  <p>
                    <Link to="/contact" className="text-reset">Contact</Link>
                  </p>
                </div>


                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 ">

                  <h6 className="text-uppercase fw-bold mb-4 text-primary">
                    Contact
                  </h6>
                  <p><FontAwesomeIcon className="text-primary me-2" icon={faHome} />
                    Dušana Danilovića, UB, Srbija
                  </p>
                  <p>
                    <FontAwesomeIcon className={"text-primary me-2"} icon={faEnvelope} />
                    miftarisimel@gmail.com
                  </p>
                  <p>
                    <FontAwesomeIcon className={"text-primary me-2"} icon={faPhone} />
                    +383 49 594 191
                  </p>
                </div>

              </div>

            </div>
          </section>



          <div className="text-center p-4 bg-secondary text-light">
            © 2022 Copyright: &nbsp;
            <a className="text-reset fw-bold" href="https://mdbootstrap.com/">Miftari Simel</a>
          </div>

        </footer>
      </div>
  );
}

export default Footer;
