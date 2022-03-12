import "./Services.scss";
import Heading from "../../components/heading/Heading";
import icDesign from "../../assets/design.png";
import icFront from "../../assets/ux.png";
import icBack from "../../assets/web-development.png";
import icAndroid from "../../assets/android.png";

function Services() {
  return (
      <div className="Services overflow-hidden">
        <Heading title={"Services"} />
        <div className={"row"}>
          <div className="px-4 py-5 mb-5 text-center bg-light">
            <img className="d-block mx-auto mb-4 h-auto" src={icDesign} alt="" width="72"
                 height="57" />
              <h1 className="display-5 fw-bold">Web & Mobile Designs</h1>
              <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Get your Android, iOS and Web apps designed by experienced professional.</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                  <button type="button" className="btn btn-gradient btn-lg px-4 gap-3">I want design</button>
                  <button type="button" className="btn btn-gradient-outline btn-lg px-4">See projects</button>
                </div>
              </div>
          </div>
        </div>
        <div className={"row"}>
          <div className="px-4 py-5 my-5 text-center bg-light">
            <img className="d-block mx-auto mb-4 h-auto" src={icFront} alt="" width="72"
                 height="57" />
            <h1 className="display-5 fw-bold">Frontend Web App</h1>
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4">Get your new Web app, with all new technologies like React, Vue or Bootstrap</p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" className="btn btn-gradient btn-lg px-4 gap-3">Order Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className={"row"}>
          <div className="px-4 py-5 my-5 text-center bg-light">
            <img className="d-block mx-auto mb-4 h-auto" src={icBack} alt="" width="72"
                 height="57" />
            <h1 className="display-5 fw-bold">Backend Web App</h1>
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4">A backend app or API, built with Django, Express, Java Spring, or PHP.
              Keep your data in Firebase, MySQL or NoSQL Databases</p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" className="btn btn-gradient btn-lg px-4 gap-3">Order Now</button>
              </div>
            </div>
          </div>
        </div>
        <div className={"row"}>
          <div className="px-4 py-5 my-5 text-center bg-light">
            <img className="d-block mx-auto mb-4 h-auto" src={icAndroid} alt="" width="72"
                 height="57" />
            <h1 className="display-5 fw-bold">Android App</h1>
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4">When it comes to Android, there many ways of making Android App such as React Native, Electron
              C++ etc. But the best one is Native programming. By using Kotlin and XML or Composer, You can get fastest, and best apps.</p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" className="btn btn-gradient btn-lg px-4 gap-3">Order Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Services;
