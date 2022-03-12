import "./Footer.scss";

// icons
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import {faPhone, faEnvelope, faPrint, faHome} from "@fortawesome/free-solid-svg-icons";
import logo from '../../logo.svg';

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
              <a href="" className="me-4 text-reset">
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="" className="me-4 text-reset">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="" className="me-4 text-reset">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href="" className="me-4 text-reset">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="" className="me-4 text-reset">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a href="" className="me-4 text-reset">
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
                    <a href="#!" className="text-reset">Android</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">React</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Vue</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Native</a>
                  </p>
                </div>



                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                  <h6 className="text-uppercase fw-bold mb-4 text-primary">
                    Useful links
                  </h6>
                  <p>
                    <a href="#!" className="text-reset">Pricing</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Settings</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Orders</a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset">Help</a>
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
