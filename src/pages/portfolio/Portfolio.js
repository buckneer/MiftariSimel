import "./Portfolio.scss";
import Heading from "../../components/heading/Heading";
import Projects from "../../components/projects/Projects";


function Portfolio() {
  return (
      <div className="Portfolio">
        <Heading title={"Portfolio"} />
        <div className={"container"}>
          <Projects isPortfolio={true} />
        </div>

      </div>
  );
}

export default Portfolio;
