import React from "react";
import { useState } from "react";
import "./App.css";

function Counter() {
  let [like, setLike] = useState(0);
  return (
    <div>
      {/* camelcase */}
      <button onClick={() => setLike(like + 1)}>👍 {like}</button>
    </div>
  );
}

export default Counter;
