import "./Projects.scss";
import {buttons} from "../../data/data";
import FlipMove from "react-flip-move";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {filterProjects, getProjects} from "../../services/services";



function Projects({isPortfolio}) {

  let [filteredProjects, setFilteredProjects] = useState(null);
  let [active, setActive] = useState("all");
  let [showModal, setShowModal] = useState(false);
  let navigate = useNavigate();

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

  let handleRedirect = (id) => {
    navigate(`/portfolio/${id}`);
  }

  return (
      <div className="Projects">
        <div className={`filters row ${isPortfolio ? 'justify-content-center mt-5' : ''}`}>
          {buttons && buttons.map((category, index) => (
              <button key={index}
                      value={category.value}
                      className={`col-lg-1 col-md-2 col-sm-10 m-3 btn btn-outline-primary border-0 rounded-pill ${active === category.value ? "active" : ''}`}
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
                  <div className="card overlay" onClick={() => handleRedirect(project.id)}>
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
  );
}

export default Projects;
