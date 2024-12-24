import React from "react";
import "../componentsStyle/Button.css";
const Button = ({ content, icon, className }) => {
  return (
    <button  className={`text-light border-0 fw-semibold rounded-2 limly-button
     d-flex align-items-center justify-content-center ${className}`}>
      {icon && <i className={`${icon} `}></i>}
      {content}
    </button>
  );
};

export default Button;
