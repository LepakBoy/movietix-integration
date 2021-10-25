import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../../assets/css/PaymentInfoStyle.css";
import moment from "moment";

class PaymentInfo extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { date_booking, timeSchedule, totalTicket, movieName, teater, totalAmount } =
      this.props.dataBooking;
    const dateFormat = moment(date_booking).format("MMM Do YYYY");
    return (
      <>
        <div className="payment-info__header info-header pb-3">Payment Info</div>
        <div className="payment-info__detail px-4 py-3">
          <div className="payment-info--list d-flex justify-content-between align-items-center pb-2">
            <div className="property">Date & time</div>
            <div className="value">{`${dateFormat} at ${timeSchedule}`}</div>
          </div>
          <div className="payment-info--list d-flex justify-content-between pt-3 align-items-center pb-3">
            <div className="property">Movie title</div>
            <div className="value">{movieName}</div>
          </div>
          <div className="payment-info--list d-flex justify-content-between pt-3 align-items-center pb-3">
            <div className="property">Cinema name</div>
            <div className="value">{`${teater} cinema`}</div>
          </div>
          <div className="payment-info--list d-flex justify-content-between pt-3 align-items-center pb-3">
            <div className="property">Number of tickets</div>
            <div className="value">{`${totalTicket} pieces`}</div>
          </div>
          <div className="price d-flex justify-content-between pt-3 align-items-center pb-3">
            <div className="property">Total Payment</div>
            <div className="value price">{`Rp. ${totalAmount}`}</div>
          </div>
        </div>
      </>
    );
  }
}

export default PaymentInfo;
