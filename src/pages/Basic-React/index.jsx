import React, { Component } from "react";
import Navbar from "../../components/Navbar";

class BasicReact extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}
  componentDidUpdate() {}
  componentWillUnmount() {}

  render() {
    return (
      <>
        <Navbar name="moviteix adfasd" />
        {/* <h1>halaman basic react</h1> */}
        <h1>basic react page </h1>
      </>
    );
  }
}

export default BasicReact;
