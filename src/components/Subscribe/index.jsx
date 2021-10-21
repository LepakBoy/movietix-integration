import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "../../assets/css/SubscribeStyle.css";

class Subscribe extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <section className="subscribe">
          <div className="container subs-container">
            <div className="subs-content">
              <div className="subscribe__header">
                <span className="subscibe__slogan">Be the vanguard of the</span>
                <span className="subscibe__title">Moviegoers</span>
              </div>
              <div className="input-email">
                <input type="text" placeholder="Type your email" className="input-subs ps-3" />
                <button className="btn-subscribe">Join now</button>
              </div>
              <div className="subscribe-desc">
                <span>
                  By joining you as a MovieTix member, we will always send you the latest updates
                  via email .
                </span>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withRouter(Subscribe);
