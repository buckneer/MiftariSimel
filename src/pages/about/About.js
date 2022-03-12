import "./About.scss";
import Heading from "../../components/heading/Heading";
import icReact from "../../assets/react.svg";
import icVue from "../../assets/vue.svg";
import icBootstrap from "../../assets/bootstrap.svg";
import icAndroid from "../../assets/android.svg";

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
    value: "+383 49 594 191"
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
              <img className={"cover-img"} src={"/img/me.png"} alt={"Miftari Simel"}/>
            </div>
            <div className={"col-lg-5 m-3 text-muted text-center"}>
              <div className={"info text-start"}>
                <h3 className="fw-bold text-dark">About me</h3>
                <p>I am working as full-stack developer. I've done a lot of projects in various field of IT and Computer Science</p>
                <p>I am mainly working in the fields of Web and Android. </p>
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
            <button className="btn btn-gradient">Visit Projects</button>
          </div>
        </div>
      </div>
  );
}

export default About;
