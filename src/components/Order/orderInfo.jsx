import React, { Component } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../../assets/css/OrderInfoStyle.css";
import cineone from "../../assets/logo/cineone.png";
import hiflix from "../../assets/logo/hiflix.png";
import ebv from "../../assets/logo/ebv.png";
import moment from "moment";

class OrderInfo extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { price, selectedSeat, dateBooking, time_schedule, teater_name } = this.props;
    const totalTicket = selectedSeat.length;
    const totalAmount = totalTicket * price;
    const dateFormat = moment(dateBooking).format("ddd, MMM Do YYYY");
    let seatChoosed = selectedSeat.join(", ");

    return (
      <>
        <div className="main__order-info">
          <header className="main-order__header">Order Info</header>
          <div className="order-info mt-4">
            <header className="order-info__header">
              <div className="teater-logo pt-4">
                <img
                  src={teater_name === "hiflix" ? hiflix : teater_name === "ebu.id" ? ebv : cineone}
                  alt="teater logo"
                />
              </div>
              <div className="teater-name pt-2">
                <span>{teater_name}</span>
              </div>
            </header>
            <div className="order-info__detail pt-3 px-3">
              <div className="order-info__movie d-flex justify-content-between pt-2">
                <div className="movie-property property">Movie Selected</div>
                <div className="movie-value value">{this.props.dataMovie[0].movie_name}</div>
              </div>
              <div className="order-info__moviedule d-flex justify-content-between pt-2">
                <div className="date-property property">{dateFormat}</div>
                <div className="time-property value">{time_schedule}</div>
              </div>
              <div className="order-info__moviee d-flex justify-content-between pt-2">
                <div className="price-property property">One ticket price</div>
                <div className="price-value value">Rp. {this.props.price}</div>
              </div>
              <div className="order-info__movie d-flex justify-content-between pt-2">
                <div className="seat-property property">Seat choosed</div>
                <div className="seat-value value">{seatChoosed}</div>
              </div>
            </div>
            <div className="total-price d-flex justify-content-between px-3 pt-5 pb-4">
              <div className="total-price__property">Total Payment</div>
              <div className="total-price__value">{`Rp. ${totalAmount}`}</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default OrderInfo;
