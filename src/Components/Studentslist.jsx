import React, { Component } from "react";
import * as api from "../api";
import { Link } from "@reach/router";

class Studentslist extends Component {
  state = {
    students: []
  };

  studentInvoker = () => {
    api.fetchAllStudents().then(({ students }) => {
      this.setState({ students: students }, () => {});
    });
  };

  componentDidMount = () => {
    this.studentInvoker();
  };

  render() {
    return (
      <div>
        {this.state.students.map(student => {
          return (
            <section key={student._id}>
              <h3>
                <Link to={`/students/${student._id}`}>{student.name}</Link>
              </h3>
              <p>startingCohort: {student.startingCohort}</p>
              <p>currentBlock: {student.currentBlock}</p>
              <p>Student_id: {student._id}</p>
            </section>
          );
        })}
      </div>
    );
  }
}

export default Studentslist;
