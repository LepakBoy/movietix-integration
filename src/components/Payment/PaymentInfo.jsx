import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../../assets/css/PaymentInfoStyle.css";

class PaymentInfo extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="payment-info__header info-header pb-3">Payment Info</div>
        <div className="payment-info__detail px-4 py-3">
          <div className="payment-info--list d-flex justify-content-between align-items-center pb-2">
            <div className="property">Date & Time</div>
            <div className="value">Tuesday, 07 July 2020 at 02:00pm</div>
          </div>
          <div className="payment-info--list d-flex justify-content-between pt-3 align-items-center pb-3">
            <div className="property">Movie title</div>
            <div className="value">Spider-Man:Homecoming</div>
          </div>
          <div className="payment-info--list d-flex justify-content-between pt-3 align-items-center pb-3">
            <div className="property">Cinema name</div>
            <div className="value">CineOne21 Cinema</div>
          </div>
          <div className="payment-info--list d-flex justify-content-between pt-3 align-items-center pb-3">
            <div className="property">Number of tickets</div>
            <div className="value">3 pieces</div>
          </div>
          <div className="price d-flex justify-content-between pt-3 align-items-center pb-3">
            <div className="property">Total Payment</div>
            <div className="value price">Rp. 120.000</div>
          </div>
        </div>
      </>
    );
  }
}

export default PaymentInfo;
