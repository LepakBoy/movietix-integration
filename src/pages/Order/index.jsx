import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../../assets/css/OrderStyle.css";
import MovieSelected from "../../components/Order/movieSelected";
import OrderInfo from "../../components/Order/orderInfo";
import OrderSeat from "../../components/Order/seatOrder";
import axios from "axios";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_movie: props.location.state.id_movie,
      id_schedule: props.location.state.id_schedule,
      time_schedule: props.location.state.time_schedule,
      date_booking: props.location.state.date_booking,
      movieById: props.location.state.movieById,
      price: props.location.state.price,
      teater: props.location.state.teater_name,
      selectedSeat: [],
      reservedSeat: ["A1", "C4"],
      totalTicket: 0
    };
  }

  componentDidMount() {
    this.getSelectedSeat();
  }
  // +++++++++++++++++++++++ ADD FUNCTION GET SEATBOOKING TO SET SELECTED SEAT +++++
  getSelectedSeat = () => {
    const { id_movie, id_schedule, time_schedule, date_booking } = this.state;
    // axios.get().then().catch();
  };

  selectedSeat = (seat) => {
    if (this.state.selectedSeat.includes(seat)) {
      //jika kursi yang sama ditekan dua kali: hapus dari array selected seat
      const deleteSeat = this.state.selectedSeat.filter((el) => {
        return el !== seat;
      });
      this.setState({
        selectedSeat: deleteSeat
      });
    } else {
      this.setState({
        //tambah data kursi setiap kali user klik kursi
        selectedSeat: [...this.state.selectedSeat, seat]
      });
    }

    this.setState({
      totalTicket: 1 + this.state.selectedSeat.length
    });
  };

  handleBook = () => {
    if (this.state.selectedSeat.length < 1) {
      alert("chose seat");
      return;
    }
    const {
      id_movie,
      id_schedule,
      date_booking,
      totalTicket,
      teater,
      time_schedule,
      selectedSeat
    } = this.state;
    const movieName = this.state.movieById[0].movie_name;
    const totalAmount = this.state.totalTicket * this.state.price;

    this.props.history.push("/payment", {
      id_movie,
      id_schedule,
      date_booking,
      totalTicket,
      movieName,
      teater,
      totalAmount,
      time_schedule,
      selectedSeat
    });
    // console.log(date_booking + "handleBook");
    // console.log(totalTicket + "handleBook");
    // console.log(movieName + "handleBook");
    // console.log(teater + "handleBook");
    // console.log(totalAmount + "handleBook");
  };

  // KENDALA : TAMBAH NAMA HARI DI DATEBOOKING
  render() {
    // console.log(this.state.date_booking);
    // console.log(this.state);
    // console.log(this.state.totalTicket);
    // console.log(this.state.date_booking);
    // console.log(this.state.date_booking);
    // console.log(this.state.movieById[0].movie_name);
    // console.log(this.state.time_schedule + " order page");
    // console.log(this.state.selectedSeat);
    let { date_booking } = this.state;
    let dateBooking = date_booking.split("-").reverse();
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    dateBooking[1] = month[dateBooking[1] - 1];
    let dateBook = dateBooking.join(" ");
    // console.log(dateBook);

    return (
      <>
        <Navbar />
        <main>
          <div className="container">
            <div className="row main__row pt-5 pb-5">
              <div className="col-lg-8 main__user-selector p-0 pe-4">
                <MovieSelected dataMovie={this.state.movieById} />
                <OrderSeat
                  selectSeat={this.selectedSeat}
                  reserved={this.state.reservedSeat}
                  selected={this.state.selectedSeat}
                  booking={this.handleBook}
                />
              </div>
              <div className="col-lg-4 main__user-info p-0">
                <OrderInfo
                  dataMovie={this.state.movieById}
                  time_schedule={this.state.time_schedule}
                  price={this.state.price}
                  teater_name={this.state.teater}
                  dateBooking={dateBook}
                  totalTicket={this.state.totalTicket}
                  selectedSeat={this.state.selectedSeat}
                />
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </>
    );
  }
}

export default Order;
