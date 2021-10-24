import React, { Component } from "react";
import axios from "../../Utils/axios";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../../assets/css/PaymentStyle.css";
import PaymentInfo from "../../components/Payment/PaymentInfo";
import PersonalInfo from "../../components/Payment/PersonalInfo";
import PaymentMethod from "../../components/Payment/PaymentMethod";

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_movie: props.location.state.id_movie,
      date_booking: props.location.state.date_booking,
      totalTicket: props.location.state.totalTicket,
      movieName: props.location.state.movieName,
      teater: props.location.state.teater,
      totalAmount: props.location.state.totalAmount,
      timeSchedule: props.location.state.time_schedule,
      seat: props.location.state.selectedSeat
    };
  }

  handlePayOrder = () => {
    const { id_movie, id_schedule, date_booking, timeSchedule, selectedSeat } = this.state;
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    // console.log(id_movie + "cek out button");
    // axios.post().then().catch();
  };

  render() {
    console.log(this.state);
    return (
      <>
        <Navbar />
        <main>
          <div className="container">
            <div className="row payment py-5">
              <section className="col-lg-7 payment-info">
                <PaymentInfo dataBooking={this.state} />
                <PaymentMethod payOrder={this.handlePayOrder} />
              </section>
              <section className="col-lg-5 personal-info">
                <PersonalInfo />
              </section>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Payment;
