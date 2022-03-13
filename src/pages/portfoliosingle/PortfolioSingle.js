import "./PortfolioSingle.scss";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {filterById} from "../../services/services";
import notFound from "../../assets/not_found.svg";
import {faAngleRight, faAngleLeft, faCircleDot} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import icAndroid from "../../assets/android.svg";
import icReact from "../../assets/react.svg";
import icVue from "../../assets/vue.svg";
import icNative from "../../assets/bootstrap.svg";


function PortfolioSingle() {

  let {id} = useParams();

  let [error, setError] = useState(false);
  let [item, setItem] = useState(filterById(id));


  useEffect(() => {

    if(item) {
      setError(false);
    } else {
      setError(true);
    }
  }, [id])


  let getIcon = (category) => {
    switch (category) {
      case "android":
        return icAndroid;
      case "vue":
        return icVue;
      case "react":
        return icReact;
      case "native":
        return icNative;
    }
  }

  return (
      <div className="PortfolioSingle">
        {error && (
          <div className={"container w-25"}>
            <img className={"cover-img"} src={notFound} alt={"404 Not Found"} />
          </div>
        )}

        {item && (<div className={"main-content"}>
          <div id="carouselExampleControls" className="carousel carousel-dark slide bg-light" data-bs-ride="carousel">

            <div className="carousel-inner">
              <div className="carousel-indicators">

                {item.img.map((src, index) => (
                    <button type="button" data-bs-target="#carouselExampleControls"
                            data-bs-slide-to={index}
                            className={index === 0 ? "active" : ""}
                            aria-current="true" aria-label="Slide 1">
                    </button>
                ))}

              </div>
              {item.img.map((src, index) => (
                  <div className={`carousel-item ${index === 0 ? "active" : ''}`}>
                    <img src={src} className="d-block w-50 h-auto mx-auto" alt="..." />
                  </div>
              ))}
              <div className={"carousel-caption"}>
                <div className="row w-50 mx-auto">
                  <div className="col-2">
                    <img className="cover-img" src={getIcon(item.category)} alt={item.category} />
                  </div>
                </div>
              </div>
            </div>
            <button className="carousel-control-prev text-primary" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev">
              <FontAwesomeIcon icon={faAngleLeft}  size={"3x"} />
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next text-primary" type="button" data-bs-target="#carouselExampleControls"
                    data-bs-slide="next">
              <FontAwesomeIcon icon={faAngleRight} size={"3x"} />
              <span className="visually-hidden">Next</span>
            </button>
          </div>

          <div className="container">
            <h1 className="fw-bold my-3 w-50 mx-auto">{item.name}</h1>
            <p className="text-muted mx-auto w-50">{item.description}</p>

          </div>

        </div>)}



      </div>
  );
}

export default PortfolioSingle;
