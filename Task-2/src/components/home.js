import React from "react";
import { Paper } from "@material-ui/core";
class Home extends React.Component {
  render() {
    return (
      <div
        style={{ color: "white", fontFamily: "Monospace", textAlign: "center" }}
      >
        <h1 style={{ fontSize: "50px" }}>Thanks for Contacting Us</h1>
        <Paper
          square
          style={{
            margin: "2rem auto",
            padding: "2rem 1rem",
            textAlign: "left",
            maxWidth: "300px",
          }}
        >
          <h4>Your Message has been Registered</h4>
          <ul style={{ listStyle: "none" }}>
            <li>
              <strong>Name : </strong>
              {this.props.message.fullname}
            </li>
            <li>
              <strong>E-Mail : </strong>
              {this.props.message.email}
            </li>
            <li>
              <strong>Subject : </strong>
              {this.props.message.subject}
            </li>
            <li>
              <strong>Query : </strong>
              {this.props.message.query}
            </li>
            <li>
              <strong>Message : </strong>
              {this.props.message.message}
            </li>
          </ul>
          <h4>We will shortly resolve your Query!!</h4>
        </Paper>
      </div>
    );
  }
}

export default Home;
