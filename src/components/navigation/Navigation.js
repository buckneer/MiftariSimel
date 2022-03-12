import "./Navigation.scss";
import logo from '../../logo.svg';
import {NavLink} from "react-router-dom";
import {useEffect, useState} from "react";

function Navigation() {

  let [isMobile, setIsMobile] = useState(window.innerWidth <= 990);

  useEffect(() => {
    window.addEventListener("resize", () => {
      let ismobile = window.innerWidth <= 990;
      if(ismobile !== isMobile) setIsMobile(ismobile);
    }, false)
  }, [isMobile])

  return (
      <div className="Navigation">
        <nav className={`navbar navbar-expand-lg fixed-top ${isMobile ? "navbar-dark bg-dark" : "navbar-light bg-light"}`}>
          <div className="container-fluid">
            <div className="navbar-brand">
              <object data={logo} height="50" width="210"/>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon">

                    </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-2">
                <li className="nav-item">
                  <NavLink className={`nav-link ${isMobile ? 'text-white' : 'text-dark'}`} to="/">HOME</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={`nav-link ${isMobile ? 'text-white' : 'text-dark'}`} to="/about">ABOUT</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={`nav-link ${isMobile ? 'text-white' : 'text-dark'}`} to="/services">SERVICES</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={`nav-link ${isMobile ? 'text-white' : 'text-dark'}`} to="/portfolio">PORTFOLIO</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className={`nav-link ${isMobile ? 'text-white' : 'text-dark'}`} to="/contact">CONTACT</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
  );
}

export default Navigation;
