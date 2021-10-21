import React, { Component } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../../assets/css/OrderInfoStyle.css";
import TeaterLogo from "../../assets/logo/cineone.png";

class OrderInfo extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="main__order-info">
          <header className="main-order__header">Order Info</header>
          <div className="order-info mt-4">
            <header className="order-info__header">
              <div className="teater-logo pt-4">
                <img src={TeaterLogo} alt="teater logo" />
              </div>
              <div className="teater-name pt-2">
                <span>CineOne21 Cinema</span>
              </div>
            </header>
            <div className="order-info__detail pt-3 px-3">
              <div className="order-info__movie d-flex justify-content-between pt-2">
                <div className="movie-property property">Movie Selected</div>
                <div className="movie-value value">Spider-Man:Homecoming</div>
              </div>
              <div className="order-info__moviedule d-flex justify-content-between pt-2">
                <div className="date-property property">Tuesday, 07 July 2021</div>
                <div className="time-property value">02.00pm</div>
              </div>
              <div className="order-info__moviee d-flex justify-content-between pt-2">
                <div className="price-property property">One ticket price</div>
                <div className="price-value value">Rp. 40.000</div>
              </div>
              <div className="order-info__movie d-flex justify-content-between pt-2">
                <div className="seat-property property">Seat choosed</div>
                <div className="seat-value value">C4, C5, C6</div>
              </div>
            </div>
            <div className="total-price d-flex justify-content-between px-3 pt-5 pb-4">
              <div className="total-price__property">Total Payment</div>
              <div className="total-price__value">Rp. 120,000</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default OrderInfo;
