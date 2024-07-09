import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "./staff.css";

function Event2() {
  return (
    <div className="Staffservicepage">
      <div className="row justify-content-center event6">
        <div className="text-center col-10">
          <h1 className="h1text">
            Augment your team with
            <strong> IT professionals based in US time zones</strong>
          </h1>
          <p>
            Decrease staffing costs and time to launch. Without sacrificing
            quality or generating QA bottlenecks.
          </p>
        </div>
      </div>
      <div className="row justify-content-center event7">
        <div className="left borderleft">
          <span className="border-bottom border-white border-opacity-10">
            <h2>UX/UI Designers</h2>
            <p>
              Work with us on developing intuitive digital solutions for web,
              iOS and Android, including VR and AR.
            </p>
          </span>
          <span className="border-bottom border-white border-opacity-10">
            <p>User experience</p>
          </span>
          <span className="border-bottom border-white border-opacity-10">
            <p>Information architecture</p>
          </span>
          <span className="border-bottom border-white border-opacity-10">
            <p>User interface</p>
          </span>
        </div>
        <div className="right borderright">
          <span className="border-bottom border-white border-opacity-10">
            <h2>Cloud Architects</h2>
            <p>
              Work with us on developing intuitive digital solutions for web,
              iOS and Android, including VR and AR.
            </p>
          </span>
          <span className="border-bottom border-white border-opacity-10">
            <p>Servers and elastic services</p>{" "}
          </span>
          <span className="border-bottom border-white border-opacity-10">
            <p>Databases</p>
          </span>
          <span className="border-bottom border-white border-opacity-10">
            <p>Serverless databases, microservices and APIs</p>
          </span>
          <img></img>
        </div>
      </div>
    </div>
  );
}
export default Event2;
