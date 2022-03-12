import "./Home.scss";
import TypeWriter from 'typewriter-effect';

// Icons
import HeroCover from '../../assets/hero_cover.svg';
import IntroIcon from '../../assets/introduction_cover.svg';
import DesignIcon from '../../assets/design.png';
import UxIcon from '../../assets/ux.png';
import WebIcon from '../../assets/web-development.png';
import AndroidIcon from '../../assets/android.png';

// Components
import GridSkillList from "../../components/GridSkillList/GridSkillList";
import ListSkillList from "../../components/ListSkillList/ListSkillList";
import FlipMove from "react-flip-move";
import {useEffect, useState} from "react";


// data
import {buttons} from '../../data/data';
import {getProjects, filterProjects} from "../../services/services";




function Home() {



  let [filteredProjects, setFilteredProjects] = useState(null);
  let [active, setActive] = useState("all");
  let [showModal, setShowModal] = useState(false);

  let handleProjects = (e) => {
    let projectCategory = e.target.value;
    setActive(projectCategory)
    projectCategory !== "all"
        ? setFilteredProjects(filterProjects(projectCategory))
        : setFilteredProjects(getProjects());
  }

  useEffect(() => {
    setFilteredProjects(getProjects())
  }, [])

  return (
      <div className="Home">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 mt-5 hero-text">
              <h2>Hello, </h2>
              <h1 className="fw-light">I am <strong className="text-primary fw-bold">Miftari Simel</strong></h1>
              <h2 className="text-primary fw-bold font-monospace">
                <TypeWriter
                  onInit={(typewriter) => {
                    typewriter
                        .typeString("Software Developer")
                        .pauseFor(1000)
                        .start();
                  }}
                />
              </h2>

              <div className="buttons d-flex mt-5">
                <button className="btn btn-gradient me-4">
                  Hire Me
                </button>
                <button className="btn btn-gradient-outline">
                  Get CV
                </button>
              </div>
            </div>
            <div className="hero-icon col-lg-7 mt-5 overflow-hidden">
              <img src={HeroCover}/>
            </div>
          </div>
        </div>


        {/*  Introduction */}
        <div className="section introduction">
          <div className="container">
            <div className="row justify-content-start">
              <div className="hero-icon col-lg-5 overflow-hidden">
                <img src={IntroIcon} alt="Firmware" />
              </div>
              <div className="intro-text col-lg-5 ms-lg-5 text-center">
                <h1 className="heading fw-bold text-start">LET ME INTRODUCE MYSELF</h1>
                <p className="text-muted text-start">Whose given. Were gathered. There first subdue greater. Bearing you Whales heaven midst their. Beast creepeth. Fish days.</p>
                <p className="text-muted text-start">Is give may shall likeness made yielding spirit a itself together created after sea is in beast beginning signs open god you're gathering whose gathered cattle let. Creature whales fruit unto meat the life beginning all in under give two.</p>
                <button className="btn btn-gradient mt-5 text-center">Download CV</button>
              </div>
            </div>
          </div>
        </div>

      {/* SKILLS */}

        <div className="section skills">
          <div className="heading text-center">
            <h1 className="fw-bold mb-5">SKILLS</h1>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-5">
              {/* GRID */}
                <GridSkillList />
              </div>
              <div className="col-lg-5">
              {/*  LIST */}
                <ListSkillList />
              </div>
            </div>
          </div>
        </div>

      {/*  SERVICES */}
        <div className="section services">
          <div className="heading text-center">
            <h1 className="fw-bold mb-5">Services</h1>
          </div>
          <div className="container">
            <div className="row justify-content-center">
              <div className="service-box col-lg-2 col-md-4 mx-5 my-2 justify-content-center text-center rounded">
                <img className="p-3" src={DesignIcon} width="104" height="106" alt="Design icon" />
                <h4 className="fw-bold">WEB & MOBILE DESIGN</h4>
                <p>Whose given. Were gathered. There first subdue greater. Bearing you Whales heaven midst their.</p>
              </div>
              <div className="service-box col-lg-2 col-md-4 mx-5 my-2 justify-content-center text-center rounded">
                <img className="p-3" src={UxIcon} width="104" height="106" alt="Design icon" />
                <h4 className="fw-bold">FRONT END</h4>
                <br />
                <p>Whose given. Were gathered. There first subdue greater. Bearing you Whales heaven midst their.</p>
              </div>
              <div className="service-box col-lg-2 col-md-4 mx-5 my-2 justify-content-center text-center rounded">
                <img className="p-3" src={WebIcon} width="104" height="106" alt="Design icon" />
                <h4 className="fw-bold">BACK END</h4>
                <br />
                <p>Whose given. Were gathered. There first subdue greater. Bearing you Whales heaven midst their.</p>
              </div>
              <div className="service-box col-lg-2 col-md-4 mx-5 my-2 justify-content-center text-center rounded">
                <img className="p-3" src={AndroidIcon} width="104" height="106" alt="Design icon" />
                <h4 className="fw-bold">ANDROID</h4>
                <br />
                <p>Whose given. Were gathered. There first subdue greater. Bearing you Whales heaven midst their.</p>
              </div>
            </div>
          </div>

        </div>


      {/*  PORTFOLIO */}
        <div className="section portfolio container text-start">
          <h1 className="fw-bold w-25">Recently Done Apps</h1>
          <div className="filters row">
            {buttons && buttons.map((category, index) => (
                <button key={index}
                value={category.value}
                className={`col-lg-1 col-md-2 col-sm-10 m-3 btn btn-outline-primary border-0 ${active === category.value ? "active" : ''}`}
                onClick={handleProjects}>
                  {category.name}
                </button>
            ))}
          </div>
          <FlipMove className="row justify-content-center">
            {filteredProjects && filteredProjects.map(project => (
                <div key={project.id} className={`grid-item col-lg-5 m-5 ${project.category}`}>
                  <div className="image-container">
                    <img src={project.thumb} alt={project.name} />
                    <div className="card overlay" onClick={() => setShowModal(true)}>
                    </div>
                  </div>
                  <div className="desc m-3">
                    <h4 className="fw-bold">{project.name}</h4>
                    <p className="text-muted">{`${project.description.substring(0, 100)}...`}</p>
                  </div>
                </div>
            ))}
          </FlipMove>
        </div>

      {/*  CONTACT*/}
        <div className="section contact container text-center p-5 w-75 m-auto rounded">
          <h1 className="text-light fw-bold">Contact Me</h1>
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <input className="form-control m-3" type="text" placeholder="Name" />
              <input className="form-control m-3" type="text" placeholder="Email" />
              <input className="form-control m-3" type="text" placeholder="Subject" />
            </div>
            <div className="col-lg-5">
              <textarea className="form-control m-3" rows="3" placeholder="Body">

              </textarea>
              <button className='btn btn-gradient-outline mt-1'>Send Message</button>
            </div>
          </div>
        </div>

      </div>
  );
}

export default Home;
