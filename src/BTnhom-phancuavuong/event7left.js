import React from "react";

const Event7left = ({ name, detail1, detail2, detail3, detail4, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, }) => {
return (
  <div className="borderleft">
    <span className="border-bottom border-white border-opacity-10">
      <h2>{name}</h2>
      <p>{detail1}</p>
    </span>
    <span className="border-bottom border-white border-opacity-10">
      <p>{detail2}</p>
    </span>
    <span className="border-bottom border-white border-opacity-10">
      <p>{detail3}</p>
    </span>
    <span className="border-bottom border-white border-opacity-10">
      <p>{detail4}</p>
    </span>
    <div className='image'>
    <img src={img1} />
    <img src={img2} />
    <img src={img3} />
    <img src={img4} />
    <img src={img5} />
    <img src={img6} />  
    <img src={img7} />
    <img src={img8} />
    <img src={img9} />
    <img src={img10} />
    </div>
  </div>
);
};
export default Event7left;
