import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Contact from "./components/contact";
import Fire from "./config/fire";
import Home from "./components/home";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      email: "",
      message: "",
      query: "",
      subject: "",
    };
  }
  eventHandler = (data) => {
    const { fullname, email, message, query, subject } = data;
    this.setState({
      fullname: fullname,
      email: email,
      message: message,
      query: query,
      subject: subject,
    });
  };
  render() {
    var user = Fire.database().ref("messages");
    return (
      <div className="bg">
        <Route
          exact
          path="/"
          render={() => <Contact user={user} onChange={this.eventHandler} />}
        />
        <Route path="/homepage" render={() => <Home message={this.state} />} />
      </div>
    );
  }
}
export default App;
