import React, { Component } from "react";

// CLASS COMPONENT BECAUSE I WANT TO USE STATE
// https://facebook.github.io/react/docs/lifting-state-up.html
class SignUp extends Component {
  state = {
    email: "",
    password: "",
  };

  handleInputChange = (event) => {
    // Destructure event.target
    const { name, value } = event.target;
    // Use computed property names to dynamically update the correct state property.
    // https://tylermcginnis.com/computed-property-names/
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        {/* Default Bootstrap Signup Form */}
        <form>
          <div className="form-group">
            <label>Email address</label>
            {/* FORM INPUT */}
            {/* REQUIRES name, value, onChange */}
            <input
              type="text"
              className="form-control"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
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
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default SignUp;
