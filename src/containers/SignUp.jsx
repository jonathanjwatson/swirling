import React, { Component } from "react";
import Form from "../components/SignUp/Form";
import About from "../components/SignUp/About";

// CLASS COMPONENT BECAUSE I WANT TO USE STATE
// https://facebook.github.io/react/docs/lifting-state-up.html
class SignUp extends Component {
  //   state = {
  //     email: "",
  //     password: "",
  //   };

  handleInputChange = (event) => {
    // Destructure event.target
    const { name, value } = event.target;
    // Use computed property names to dynamically update the correct state property.
    // https://tylermcginnis.com/computed-property-names/
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event, email, password) => {
    event.preventDefault();
    console.log("Email and Password: " + email + " " + password);
  };

  render() {
    return (
      <div>
        <h1>Welcome to my sign up page!</h1>
        {/* Default Bootstrap Signup Form */}
        <Form
          //   email={this.state.email}
          //   password={this.state.password}
          //   handleInputChange={this.handleInputChange}
          handleSubmit={this.handleSubmit}
        />
        <About />
      </div>
    );
  }
}

export default SignUp;
