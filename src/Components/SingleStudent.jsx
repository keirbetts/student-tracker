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
        {blockHistory.map((block, index) => {
          let count = 0;

          if (blockHistory[index + 1]) {
            if (block.name === blockHistory[index + 1].name) {
              count++;
              if (index !== blockHistory.length - 1) {
                return (
                  <div key={index}>
                    <p>Block: {block.name}</p>
                    <p>BlockNumber: {block.number}</p>
                     <p>Block repeats: {count}</p>
                  </div>
                ); 
              } else {
                return (
                  <div key={block._id}>
                    <p>Block: {block.name}</p>
                    <p>BlockNumber: {block.number}</p>
                  </div>
                );
              }
            } else {
              if (index !== blockHistory.length - 1) {
                return (
                  <div key={index}>
                    <p>Block: {block.name} 	&#10003;</p>
                    <p>BlockNumber: {block.number}</p>
                    <p>Block repeats: {count}</p>
                  </div>
                ); 
              } else {
                return (
                  <div key={block._id}>
                    <p>Block: {block.name}</p>
                    <p>BlockNumber: {block.number}</p>
                    <p>Block repeats: {count}</p>
                  </div>
                );
              }
          }
          
          // if (index !== blockHistory.length - 1) {
          // return (
          //   <div key={index}>
          //     <p>Block: {block.name} 	&#10003;</p>
          //     <p>BlockNumber: {block.number}</p>
          //   </div>
          // );
          // } else {
          //   return (
          //     <div key={block._id}>
          //       <p>Block: {block.name}</p>
          //       <p>BlockNumber: {block.number}</p>
          //     </div>
          //   );
          // }         
        }})}
        <p>student_id: {_id}</p>
      </div>
    );
  }
}

export default SingleStudent;
