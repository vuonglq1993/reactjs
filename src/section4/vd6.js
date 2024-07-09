import React from "react";
import { useState } from "react";
import "./App.css";

function ColorBox() {
  const [color, setColor] = useState("orange");
  const styles = {
    background: color,
  };
  return (
    <div>
      <h1>Color Box</h1>
      <input type="text" style={styles} placeholder="Type a color" />
    </div>
  );
}
