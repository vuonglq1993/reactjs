import React from "react";
import leftdetails from "./event7detailleft";
import Event7left from "./event7left";
import "./staff.css";
import "./cauvong.css";

const Event7 = () => {
    return(
        <div className="row justify-content-center event7">
            {leftdetails.map((borderleft,index) =>(<Event7left key = {index} {...borderleft} />))}  
        </div>
    );
};

export default Event7;