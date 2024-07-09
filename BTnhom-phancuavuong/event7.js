import React from "react";
import leftdetails from "./event7detailleft";
import Event7left from "./event7left";
import "./staff.css";
import "./cauvong.css";

const Event7 = () => {
  return (
    <div>
      <div className="row justify-content-center event7">
        {leftdetails.map((borderleft, index) => (
          <Event7left key={index} {...borderleft} />
        ))}
      </div>
      <div className="row justify-content-center event7">
        <div className='left'>
        <h1 className=" h1text text-2">
        Reach out to find 
          <strong> hidden talent that will support your team</strong>
        </h1>
        </div>
        <div className='right'>
        <p className=" event1end">
        Find developers and designers at 40-60% lower rates. Even for niche projects with very specific requirements.
        </p>
        </div>
      </div>
    </div>
  );
};

export default Event7;
