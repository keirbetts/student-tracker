import React, { Component } from "react";
import * as api from "../api";

class StudentAdder extends Component {
  state = {
    name: "",
    startingCohort: 1
  };

  handleChange = (inputValue, key) => {
    this.setState({ [key]: inputValue }, () => {});
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("HIIII");

    api.postStudent({ ...this.state }).then(newStudent => {
      console.log(newStudent, "POSTED");
      this.props.addStudent(newStudent.student);
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              className="input"
              onChange={event => {
                this.handleChange(event.target.value, "name");
              }}
              type="text"
              id="name"
              required
            />
            Starting cohort:
            <input
              className="input"
              onChange={event => {
                this.handleChange(event.target.value, "startingCohort");
              }}
              type="number"
              id="startingCohort"
              required
            />
          </label>
          <button className="button">ADD STUDENT</button>
        </form>
      </div>
    );
  }
}

export default StudentAdder;
