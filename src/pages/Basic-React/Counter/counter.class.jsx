import React, { Component } from "react";
import { Container, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { increaseCounter } from "../../../stores/action/counter";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    console.log(this.props.counter);
  }

  increaseCounter = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  resetCount = () => {
    this.setState({
      count: 0
    });
  };
  decreaseCount = () => {
    this.setState({
      count: this.state.count - 1
    });
  };
  render() {
    const { count } = this.props.counter;
    return (
      <Container className="text-center">
        <h2>Counter App</h2>
        <h3>{count}</h3>
        <Button variant="primary" onClick={this.decreaseCount}>
          -
        </Button>
        <Button variant="secondary" className="mx-2" onClick={this.resetCount}>
          RESET
        </Button>
        <Button variant="primary" onClick={this.props.increaseCounter}>
          +
        </Button>
      </Container>
    );
  }
}

// mapStateToProps : untuk mendaftarkan action module yang di perlukan
const mapDispatchToProps = {
  increaseCounter
};

const mapStateToProps = (state) => ({
  counter: state.counter
});

// mapStateToProps : untuk mendaftarkan module yang di perlukan
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
