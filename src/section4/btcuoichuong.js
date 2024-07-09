import React from "react";
import { useState } from "react";
import "./App.css";
import { useRef, useEffect } from "react";

const DrawingBoard = ({ brushColor, brushRadius }) => {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.lineCap = "round";
    context.lineJoin = "round";
    context.strokeStyle = brushColor;
    context.lineWidth = brushRadius;
  }, [brushColor, brushRadius]);

  const startDrawing = (e) => {
    const { offsetX, offsetY } = e.nativeEvent;
    const context = canvasRef.current.getContext("2d");
    context.beginPath();
    context.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = e.nativeEvent;
    const context = canvasRef.current.getContext("2d");
    context.lineTo(offsetX, offsetY);
    context.stroke();
  };

  const stopDrawing = () => {
    const context = canvasRef.current.getContext("2d");
    context.closePath();
    setIsDrawing(false);
  };

  return (
    <canvas
      ref={canvasRef}
      width={800}
      height={600}
      onMouseDown={startDrawing}
      onMouseMove={draw}
      onMouseUp={stopDrawing}
      onMouseLeave={stopDrawing}
      onTouchStart={(e) => startDrawing(e.touches[0])}
      onTouchMove={(e) => draw(e.touches[0])}
      onTouchEnd={stopDrawing}
      style={{ border: "1px solid #000", touchAction: "none" }}
    />
  );
};

const Toolbar = ({ setBrushColor, setBrushRadius }) => {
  return (
    <div>
      <div className="inlineblock">
        <span>Brush size: </span>
        <button
          onClick={() => setBrushRadius(8)}
          style={{
            backgroundColor: "#000",
            width: "30px",
            height: "30px",
            borderRadius: "50%",
            margin: "5px",
          }}
        ></button>
        <button
          onClick={() => setBrushRadius(16)}
          style={{
            backgroundColor: "#000",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            margin: "5px",
          }}
        ></button>
        <button
          onClick={() => setBrushRadius(24)}
          style={{
            backgroundColor: "#000",
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            margin: "5px",
          }}
        ></button>
      </div>
      <div className="inlineblock">
        <span>Color: </span>
        <button
          onClick={() => setBrushColor("#FF0000")}
          style={{
            backgroundColor: "#FF0000",
            width: "30px",
            height: "30px",
            margin: "5px",
          }}
        ></button>
        <button
          onClick={() => setBrushColor("#8A2BE2")}
          style={{
            backgroundColor: "#8A2BE2",
            width: "30px",
            height: "30px",
            margin: "5px",
          }}
        ></button>
        <button
          onClick={() => setBrushColor("#FFB6C1")}
          style={{
            backgroundColor: "#FFB6C1",
            width: "30px",
            height: "30px",
            margin: "5px",
          }}
        ></button>
      </div>
    </div>
  );
};

function App() {
  const [brushColor, setBrushColor] = useState("#FF0000");
  const [brushRadius, setBrushRadius] = useState(8);

  return (
    <div className="App">
      <Toolbar setBrushColor={setBrushColor} setBrushRadius={setBrushRadius} />
      <DrawingBoard brushColor={brushColor} brushRadius={brushRadius} />
    </div>
  );
}

export default App;
