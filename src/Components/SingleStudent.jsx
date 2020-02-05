import React, { Component } from "react";
import * as api from "../api";

class SingleStudent extends Component {
  state = {
    student: { blockHistory: [] }
  };

  singleStudentInvoker = () => {
    api.fetchOneStudent(this.props.student_id).then(({ student }) => {
      this.setState({ student: student }, () => {});
    });
  };

  componentDidMount = () => {
    this.singleStudentInvoker();
  };

  render() {
    const { name, startingCohort, blockHistory, _id } = this.state.student;
    return (
      <div>
        <h3>{name}</h3>
        <p>StartingCohort: {startingCohort}</p>
        {blockHistory.map(block => {
          return (
            <div key={block._id}>
              <p>Block: {block.name}</p>
              <p>BlockNumber: {block.number}</p>
            </div>
          );
        })}
        <p>student_id: {_id}</p>
      </div>
    );
  }
}

export default SingleStudent;
