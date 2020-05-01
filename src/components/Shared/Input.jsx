import React from "react";

const Input = (props) => {
  return (
    <div className="form-group">
      <input
        type={props.type}
        className="form-control"
        name={props.name}
        value={props.value}
        onChange={props.handleChange}
      />
    </div>
  );
};

export default Input;
