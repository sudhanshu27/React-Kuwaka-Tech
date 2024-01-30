import React from "react";
import "./InputBoxes.css";

const InputBox = ({ lable, placeholder, flag }) => {
  return (
    <div className="box">
      <div className="lable">{lable}</div>
      <div>
      <input className="input" placeholder={placeholder} />
      
      </div>
    </div>
  );
};

export default InputBox;
