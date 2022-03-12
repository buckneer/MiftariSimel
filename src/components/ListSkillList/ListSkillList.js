import "./ListSkillList.scss";

let skills = [
  {
    name: "PHP",
    percent: 60
  },
  {
    name: "Java",
    percent: 70
  },
  {
    name: "XML",
    percent: 90
  },
  {
    name: "Jetpack Compose",
    percent: 80
  },
  {
    name: "Web Development",
    percent: 90
  }
]

function ListSkillList() {
  return (
      <div className="ListSkillList">
        {skills.map(skill => (
          <div className="skill-box mt-3 ">
            <div className="d-flex">
              <h4 className="fw-bold text-start">{skill.name}</h4>
              <h4 className="ms-auto">{skill.percent}%</h4>
            </div>

            <div className="progress rounded-pill" style={{height: "20px"}}>
              <div className="progress-bar bg-secondary rounded-pill" role="progressbar" style={{width: `${skill.percent}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">

              </div>
            </div>
          </div>
        ))}
      </div>
  );
}

export default ListSkillList;
