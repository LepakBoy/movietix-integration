import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../../assets/css/OrderStyle.css";
import MovieSelected from "../../components/Order/movieSelected";
import OrderInfo from "../../components/Order/orderInfo";
import OrderSeat from "../../components/Order/seatOrder";

class Order extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id_movie: props.location.state.id_movie,
      id_schedule: props.location.state.id_schedule,
      time_schedule: props.location.state.time_schedule,
      date_booking: props.location.state.date_booking,
      movieById: props.location.state.movieById,
      price: props.location.state.price
    };
  }

  render() {
    // console.log(this.state);
    // console.log(this.state.movieById[0].movie_name);
    // console.log(this.state.time_schedule + " order page");
    return (
      <>
        <Navbar />
        <main>
          <div className="container">
            <div className="row main__row pt-5 pb-5">
              <div className="col-lg-8 main__user-selector p-0 pe-4">
                <MovieSelected dataMovie={this.state.movieById} />
                <OrderSeat />
              </div>
              <div className="col-lg-4 main__user-info p-0">
                <OrderInfo
                  dataMovie={this.state.movieById}
                  time_schedule={this.state.time_schedule}
                  price={this.state.price}
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
