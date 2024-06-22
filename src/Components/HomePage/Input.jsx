import React from "react";
import "./input.css";

const Input = ({ label, name, type = "text", placeholder = "Type Here" }) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={name}>{label}</label>
      <input type={type} placeholder={placeholder} className="border h-7" />
    </div>
  );
};

export default Input;
