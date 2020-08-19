import React from "react";

import { Paper, Container, TextField } from "@material-ui/core";

class Contact extends React.Component {
  state = {
    fullname: "",
    email: "",
    subject: "",
    message: "",
    query: "",
  };
  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.registerUser();
    if (this.props.onChange) {
      this.props.onChange(this.state);
    }
    window.location.href = "/homepage";
  };
  registerUser = () => {
    var newUser = this.props.user.push();
    newUser.set({ ...this.state, timestamp: Date() });
  };
  render() {
    const fieldStyle = {
      marginBottom: "10px",
      width: "100%",
      marginRight: "10px",
    };
    return (
      <Container>
        <Paper
          square
          style={{
            margin: "2rem auto",
            padding: "2rem 1.5rem",
            textAlign: "center",
            maxWidth: "300px",
          }}
        >
          <h1
            style={{ margin: "0", fontSize: "20px", fontFamily: "monospace" }}
          >
            Contact Us
          </h1>
          <p style={{ fontSize: "10px", margin: "1rem 2rem" }}>
            Have any Questions? We'd love to hear from you
          </p>
          <form onSubmit={this.onSubmit}>
            <TextField
              style={fieldStyle}
              id="email"
              label="e-mail"
              size="small"
              type="email"
              required
              onChange={this.handleChange}
            />

            <TextField
              style={fieldStyle}
              id="fullname"
              label="full name"
              size="small"
              required
              onChange={this.handleChange}
            />

            <TextField
              style={fieldStyle}
              id="subject"
              label="subject"
              size="small"
              required
              onChange={this.handleChange}
            />

            <TextField
              style={fieldStyle}
              id="message"
              label="message"
              size="small"
              multiline
              rows={3}
              onChange={this.handleChange}
            />
            <TextField
              style={fieldStyle}
              id="query"
              label="query"
              size="small"
              required
              multiline
              rows={3}
              onChange={this.handleChange}
            />
            <button
              type="submit"
              style={{
                ...fieldStyle,
                marginTop: "20px",
                padding: "1rem",
                background: "#15243b",
                color: "white",
              }}
            >
              Send
            </button>
          </form>
        </Paper>
      </Container>
    );
  }
}
export default Contact;
