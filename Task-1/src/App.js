import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Signup from "./components/signup";
import Fire from "./config/fire";
import Home from "./components/home";

class App extends React.Component {
  render() {
    var user = Fire.database().ref("users");
    return (
      <div className="bg">
        <Route exact path="/" render={() => <Signup user={user} />} />
        <Route path="/homepage" component={Home} />
      </div>
    );
  }
}
export default App;
