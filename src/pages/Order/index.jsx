import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../../assets/css/OrderStyle.css";
import MovieSelected from "../../components/Order/movieSelected";
import OrderInfo from "../../components/Order/orderInfo";
import OrderSeat from "../../components/Order/seatOrder";
import axios from "../../Utils/axios";
import { Modal, Button } from "react-bootstrap";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_movie: props.location.state ? props.location.state.id_movie : "",
      id_schedule: props.location.state ? props.location.state.id_schedule : "",
      time_schedule: props.location.state ? props.location.state.time_schedule : "",
      date_booking: props.location.state ? props.location.state.date_booking : "",
      movieById: props.location.state ? props.location.state.movieById : "",
      price: props.location.state ? props.location.state.price : "",
      teater: props.location.state ? props.location.state.teater_name : "",
      selectedSeat: [],
      reservedSeat: [],
      show: false,
      error: ""
    };
  }

  componentDidMount() {
    this.checkingData();
    this.getSelectedSeat();
  }
  checkingData = () => {
    const { id_movie, id_schedule, time_schedule, date_booking, movieById } = this.state;
    if (!id_movie || !id_schedule || !time_schedule || !date_booking || !movieById) {
      alert("select movie");
      this.props.history.push("/");
      return;
    }
  };

  getSelectedSeat = () => {
    const { id_movie, id_schedule, time_schedule, date_booking } = this.state;
    axios
      .get(
        `seat/?id_schedule=${id_schedule}&id_movie=${id_movie}&date_booking=${date_booking}&time_booking=${time_schedule}`
      )
      .then((res) => {
        const reservedSeat = res.data.data.map((item) => {
          return item.seat.toUpperCase();
        });

        this.setState({
          reservedSeat: reservedSeat
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
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
      if (!this.state.reservedSeat.includes(seat)) {
        this.setState({
          //tambah data kursi setiap kali user klik kursi
          selectedSeat: [...this.state.selectedSeat, seat]
        });
      }
    }
  };

  handleBook = () => {
    if (this.state.selectedSeat.length < 1) {
      this.setState({ ...this.state, error: "Please choose seat", show: true });
      return;
    }
    const { id_movie, id_schedule, date_booking, teater, time_schedule, selectedSeat } = this.state;
    const movieName = this.state.movieById[0].movie_name;
    const totalTicket = this.state.selectedSeat.length;
    const totalAmount = totalTicket * this.state.price;

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
  };
  handleClose = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <>
        <Modal show={this.state.show} onHide={this.handleClose} backdrop="static" keyboard={false}>
          <Modal.Header>
            <Modal.Title>
              {this.state.error.split(" ")[0] === "Success" ? "Success.." : "Oopss.."}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.state.error}</Modal.Body>
          <Modal.Footer>
            <Button variant={"primary"} onClick={this.handleClose}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>
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
                  dateBooking={this.state.date_booking}
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
