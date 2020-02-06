import React, { Component } from 'react';
import * as api from "../api";
import * as utils from "../utils/utils"

class SingleBlock extends Component {
    state = {
        students: [],
        studentCount: 0
    }

    studentsForBlockInvoker = () => {
        api.fetchStudentsForBlock(this.props.block_slug)
        .then(({students}) => {
            this.setState({students: students}, () => {
               let count = utils.countStudentsInBlock (this.state.students);
               this.setState({studentCount: count})
            })
        })
    }

    componentDidMount() {
        this.studentsForBlockInvoker();
    }

    render() {
        return (
            <div>
                <h3>Students in {this.props.block_slug} block: {this.state.studentCount}</h3>
                {this.state.students.map((student) => {
                    const { name, startingCohort, _id, currentBlock} = student;
                    return (
                        <section key={_id}>
                        <h3>{name}</h3>
                        <p>Starting cohort: {startingCohort}</p>
                        <p>Current block: {currentBlock}</p>
                        <p>Student ID: {_id}</p>
                        </section>
                    )
                })}
            </div>
        );
    }
}

export default SingleBlock;