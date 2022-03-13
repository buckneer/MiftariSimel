import "./Contact.scss";
import Heading from "../../components/heading/Heading";


function Contact() {
  return (
      <div className="Contact">
        <Heading title={"Contact Me"} />
        <div className={"email-contact container bg-secondary w-75"}>
          <h1 className={"section fw-bold text-center py-5 text-light"}>Contact me via Email</h1>
          <div className="row justify-content-center pb-5">
            <div className="col-lg-4">
              <input className="form-control m-3" type="text" placeholder="Name" />
              <input className="form-control m-3" type="text" placeholder="Email" />
              <input className="form-control m-3" type="text" placeholder="Subject" />
            </div>
            <div className="col-lg-4 text-center">
              <textarea className="form-control m-3" rows="3" placeholder="Body">

              </textarea>
              <button className='btn btn-gradient-outline mt-1'>Send Message</button>
            </div>
          </div>
        </div>

        <div className={"email-contact container bg-secondary w-75"}>
          <h1 className={"section fw-bold text-center py-5 text-light"}>Other ways to contact me</h1>
          <div className={"row text-center pb-5"}>
            <h1 className={"fw-bold text-white"}>Still Working on this.... sorry! :(</h1>
          </div>

        </div>


      </div>
  );
}

export default Contact;
