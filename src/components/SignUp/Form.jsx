import React, { useState } from "react";
import Button from "../Shared/Button";
import Input from "../Shared/Input";

const Form = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={(e) => {
        props.handleSubmit(e, email, password);
      }}
    >
      {/* <div className="form-group">
        <label>Email address</label>
        FORM INPUT
        REQUIRES name, value, onChange
        <input
          type="text"
          className="form-control"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <small id="emailHelp" className="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div> */}
      <Input
        type="text"
        name="email"
        value={email}
        handleChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <Input
        type="password"
        name="password"
        value={password}
        handleChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <Button />
    </form>
  );
};

export default Form;
