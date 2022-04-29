import "./About.scss";
import Heading from "../../components/heading/Heading";
import icReact from "../../assets/react.svg";
import icVue from "../../assets/vue.svg";
import icBootstrap from "../../assets/bootstrap.svg";
import icAndroid from "../../assets/android.svg";
import {Link} from "react-router-dom";

let data = [
  {
    name: "Name",
    value: "Miftari Simel"
  },
  {
    name: "Date of Birth",
    value: "February 2, 2002"
  },
  {
    name: "Address",
    value: "Dušana Danilovića, Ub, Serbia"
  },
  {
    name: "Email",
    value: "miftarisimel@gmail.com"
  },
  {
    name: "Phone",
    value: "+381 64 3522244"
  },
]

let frameworks = [
  {
    name: "React",
    icon: icReact
  },
  {
    name: "Vue",
    icon: icVue
  },
  {
    name: "Bootstrap",
    icon: icBootstrap
  },
  {
    name: "Android",
    icon: icAndroid
  }
]

function About() {
  return (
      <div className="About">
        <Heading title={"About Me"} />

        <div className={"section container"}>
          <div className="row">
            <div className={"col-lg-5 m-3"}>
              <img className={"cover-img"} src={"/img/me.jpeg"} alt={"Miftari Simel"}/>
            </div>
            <div className={"col-lg-5 m-3 text-muted text-center"}>
              <div className={"info text-start"}>
                <h3 className="fw-bold text-dark">About me</h3>
                <p>I am Miftari Simel, a full-stack software developer from Serbia. I am currently on my way to getting Bachelor's degree in Computer Science. I love problem-solving and learning new things.</p>
                <p>Over the years, I've learned many programming languages. And I had time to improve my knowledge. Currently, I am working as a full-stack software developer. I've been in this field for more than four years, constantly improving skills and demonstrating them. As the primary language, I am using JavaScript. For Web applications, I am using the MERN stack, and for Android and iOS apps, React Native. </p>
                <div className={"row"}>
                  {data.map(item => (
                      <>
                        <p className={"col-5 fw-bold text-dark"}>
                          {item.name}:
                        </p>
                        <p className={"col-5"}>
                          {item.value}
                        </p>
                      </>
                  ))}
                </div>
              </div>

              <h5 className={"text-dark fw-bold"}><span className={"text-primary"}>20+</span> Completed Projects</h5>
              <button className={"btn btn-gradient mt-5"}>Download CV</button>
            </div>
          </div>
          <div className={"container"}>
            <div className={"row justify-content-center"}>
              {frameworks.map(item => (
                  <div className={"col-lg-2 col-md-6 col-sm-11 m-3"}>
                    <img className={"cover-img p-5"} src={item.icon} alt={item.name} key={item.name} />
                  </div>
              ))}
            </div>
          </div>
          <div className={"container text-center"}>
            <Link to="/portfolio" className="btn btn-gradient">Visit Projects</Link>
          </div>
        </div>
      </div>
  );
}

export default About;
