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
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <Navbar />
        <main>
          <div className="container">
            <div className="row main__row pt-5 pb-5">
              <div className="col-lg-8 main__user-selector p-0 pe-4">
                <MovieSelected />
                <OrderSeat />
              </div>
              <div className="col-lg-4 main__user-info p-0">
                <OrderInfo />
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
