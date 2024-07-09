import React from "react";
import "./staff.css";
import "./cauvong.css";

function Event1() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section>
        <div className="row justify-content-center event1">
          <div className="text-center col-10">
            <div className="mau1"></div>
            <div className="mau2"></div>
            <div className="mau3"></div>
            <div className="mau4"></div>
            <div className="mau5"></div>
            <div className="mau6"></div>
            <div className="mau7"></div>
            <div className="mau8"></div>
            <div className="mau9"></div>
          </div>
        </div>
        <div className="row justify-content-center event1">
          <div className="text-center col-10">
            <p className="text-center info">IT STAFF AUGMENTATION SERVICES</p>
            <h1 className="text-center h1text text-2">
              Now you don't have to
              <strong> hire, train and manage </strong>
              an entire in-house development team
            </h1>
            <p className="text-center event1end">
              Specialists for hard-to-fit positions. Based in US time zones.
            </p>
            <div className="row justify-content-center">
              <button
                className="button"
                onClick={() => scrollToSection("event8form")}
              >
                <span className="message">Leave us a message</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="inbutton bi bi-arrow-up-right-circle"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.854 10.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
    </section>
  );
}
export default Event1;
