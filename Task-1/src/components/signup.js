import React from "react";

import { Paper, Container, TextField, NativeSelect } from "@material-ui/core";

class Signup extends React.Component {
  state = {
    fullname: "",
    email: "",
    dob: "",
    gender: "Prefer Not to Say",
    password: "",
  };
  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.registerUser();
    window.location.href = "/homepage";
  };
  registerUser = () => {
    var newUser = this.props.user.push();
    newUser.set({ ...this.state, date: Date() });
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
            margin: "5rem auto",
            padding: "2rem 1.5rem",
            textAlign: "center",
            maxWidth: "300px",
          }}
        >
          <h1
            style={{ margin: "0", fontSize: "20px", fontFamily: "monospace" }}
          >
            Sign Up
          </h1>
          <p style={{ fontSize: "10px", margin: "1rem 2rem" }}>
            Create an account to access the full version
          </p>
          <form onSubmit={this.onSubmit}>
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
              id="email"
              label="e-mail"
              size="small"
              type="email"
              required
              onChange={this.handleChange}
            />

            <TextField
              style={{ ...fieldStyle, width: "50%" }}
              id="dob"
              helperText="DOB"
              type="date"
              required
              onChange={this.handleChange}
            />

            <NativeSelect
              id="gender"
              onChange={this.handleChange}
              defaultValue="gender"
              style={{ ...fieldStyle, width: "42%" }}
            >
              <option value="gender" disabled>
                Gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </NativeSelect>

            <TextField
              style={fieldStyle}
              id="password"
              label="password"
              size="small"
              type="password"
              required
              inputProps={{ minLength: "8" }}
              onChange={this.handleChange}
            />

            <button
              type="submit"
              style={{
                ...fieldStyle,
                marginTop: "20px",
                padding: "1rem",
                background: "#061c09",
                color: "white",
              }}
            >
              Sign Up
            </button>
          </form>
        </Paper>
      </Container>
    );
  }
}
export default Signup;
