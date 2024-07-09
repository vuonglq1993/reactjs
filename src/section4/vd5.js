import React from "react";

import "./App.css";

function ColorBox() {
  const styles = {
    background: "orange",
  };
  return (
    <div>
      <h1>Color Box</h1>
      <input type="text" style={styles} placeholder="Type a color" />
    </div>
  );
}
export default ColorBox;
