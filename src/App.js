import React from "react";
import SignUp from "./containers/SignUp";

function App() {
  return (
    <div>
      Welcome to my app
      <div className="container">
        <div className="row">
          <div className="col">
            <SignUp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
