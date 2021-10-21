import React, { Component } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../../assets/css/OrderSeatStyle.css";

class OrderSeat extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="main__seat-selector">
          <header className="seat-selector__header">Choose Your Seat</header>
          <div className="seat-selector mt-4">skip</div>
          <div className="button-group pt-4">
            <button className="seat__btn-change-movie">Change your movie</button>
            <button className="seat__btn-change-chekout">Checkout now</button>
          </div>
        </div>
      </>
    );
  }
}

export default OrderSeat;
