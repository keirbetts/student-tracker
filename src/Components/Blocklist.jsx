import React, { Component } from "react";
import * as api from "../api";
import { Link } from "@reach/router";

class Blocklist extends Component {
  state = { 
    blocks: [],
    studentCount: 0
  };

  blockInvoker = () => {
    api.fetchAllBlocks()
    .then(({blocks}) => {
      this.setState({blocks: blocks})
    })
  }

  componentDidMount() {
    this.blockInvoker()
  }



  render() {
    return <div>
      {this.state.blocks.map((block) => {
        return (
          <section key={block._id}>
          <h3><Link to={`/blocks/${block.slug}`}>{block.name}</Link></h3>
          <p>Number: {block.number}</p>
          <p>Block ID: {block._id}</p>
          </section>
        )
      })}
    </div>;
  }
}

export default Blocklist;
