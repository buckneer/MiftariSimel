import "./GridSkillList.scss";
import {CircularProgressbar, buildStyles} from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';



let skills = [
  {
    name: "HTML",
    percent: 70
  },
  {
    name: "CSS",
    percent: 90
  },
  {
    name: 'JS',
    percent: 95
  },
  {
    name: "Kotlin",
    percent: 80
  }
]

function GridSkillList() {

  let style = buildStyles({
    pathColor: '#7E54EC',
    textColor: "#000",
    trailColor: "#f1f1f1"
  })

  return (
      <div className="GridSkillList">

        <div className="row text-center ms-lg-5">
          {skills.map(skill => (
              <div className="card col-5 m-3 shadow">
                <CircularProgressbar styles={style} className="p-3" value={skill.percent} text={`${skill.percent}%`} />
                <h2 className="fw-bold p-2">{skill.name}</h2>
              </div>
          ))}
        </div>

      </div>
  );
}

export default GridSkillList;
