import React from "react";

const Input = ({label,type,id,name,value,onChange,error}) => {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
      />
      <p className="error">{error}</p>
    </div>
  );
};

export default Input;
