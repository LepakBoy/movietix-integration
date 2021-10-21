import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../../assets/css/JumbotronStyle.css";
import JumbotronImg from "../../assets/img/jumbotron-img.png";

class Jumbotron extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <header>
          <div className="container">
            <section className="jumbotron pt-5">
              <div className="jumbotron__slogan col-md-6">
                <h3>Nearest Cinema, Newest Movie,</h3>
                <h2>Find out now!</h2>
              </div>
              <div className="jumbotron__img col-md-6 d-flex align-items-center justify-content-center">
                <img src={JumbotronImg} alt="jumbotron" className="jumbotron__img--img" />
              </div>
            </section>
          </div>
        </header>
      </>
    );
  }
}

export default withRouter(Jumbotron);
