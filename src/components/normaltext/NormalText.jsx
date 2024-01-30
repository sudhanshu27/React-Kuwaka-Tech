import React from "react";
import "./NormalText.css";

const NormalText = ({ text, highlight }) => {
  return (
    <div className="text">
      {text}{" "}
      <a className="highlight" href="">
        {highlight}
      </a>
    </div>
  );
};

export default NormalText;
