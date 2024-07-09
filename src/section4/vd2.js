import React from "react";

import "./App.css";

function Counter() {
  let like = 10;
  return (
    <div>
      {/* camelcase */}
      <button
        onClick={() => {
          like++;
          console.log(like);
        }}
      >
        Like
      </button>
      <h1>{like}</h1>
      <h1>{like}</h1>
      <h1>{like}</h1>
    </div>
  );
}
export default Counter;
