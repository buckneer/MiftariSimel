import "./Heading.scss";


function Heading({title}) {
  return (
      <div className="Heading text-center mx-auto text-light py-5">
        <h1 className="fw-bold my-2 p-5 text-uppercase">{title}</h1>
      </div>
  );
}

export default Heading;
