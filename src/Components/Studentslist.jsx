import React, { Component } from "react";
import * as api from "../api";
import { Link } from "@reach/router";
import * as utils from "../utils/utils"
import StudentAdder from "./StudentAdder";

class Studentslist extends Component {
  state = {
    students: [],
    studentsCount: 0
  };

  studentInvoker = (gradIsVisible) => {
    api.fetchAllStudents(gradIsVisible).then(({ students }) => {
      this.setState({ students: students }, () => {
          let count = utils.countStudentsOnCourse(this.state.students);
          this.setState({studentsCount: count})
      });
    });
  };

  componentDidMount = () => {
    this.studentInvoker('false');

  };

  handleClick = (clickEvent) => {
    if (clickEvent.target.value === "View graduated students") {
      this.studentInvoker('true');
    } else {
      this.studentInvoker('false');
    }
  }

  addStudent = (newStudent) => {
    this.setState((currentState) => {
      return { students: [newStudent, ...currentState.students]}
    })
  }

  render() {
    return (
      <div>
        <h3>Students on the course: {this.state.studentsCount}</h3>
        <h4>ADD STUDENT:</h4>
        <StudentAdder students={this.state.students} addStudent={this.addStudent} />
        <select onChange={this.handleClick}>
          <option id="allStudents">View all students</option>
          <option id="gradStudents">View graduated students</option>
        </select>
        {this.state.students.map(student => {
          console.log(student.name);
          
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
