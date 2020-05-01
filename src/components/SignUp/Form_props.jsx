import React from 'react';

const Form = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
          <div className="form-group">
            <label>Email address</label>
            {/* FORM INPUT */}
            {/* REQUIRES name, value, onChange */}
            <input
              type="text"
              className="form-control"
              name="email"
              value={props.email}
              onChange={props.handleInputChange}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              name="password"
              value={props.password}
              onChange={props.handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
    );
};

export default Form;