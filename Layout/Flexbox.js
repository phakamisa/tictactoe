import React from "react";
import "../CSS/flexbox.css";

const Flexbox = () => {
  return (
    <div className="flex-container">
      <div>1</div>
      <div style={{ fontSize: "10px" }}>2</div>
      <div style={{ fontSize: "20px" }}>3</div>
      <div style={{ fontSize: "5px" }}>4</div>
      <div style={{ fontSize: "30px" }}>5</div>
      <div style={{ flexGrow: "6" }}>6</div>
    </div>
  );
};

export default Flexbox;
