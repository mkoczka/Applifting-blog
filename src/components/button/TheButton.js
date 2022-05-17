import React from "react";
import "../button/button.scss";

const TheButton = ({ value }) => {
  return (
    <div>
      <button>{value}</button>
    </div>
  );
};

export default TheButton;
