import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../../assets/css/PaymentStyle.css";
import PaymentInfo from "../../components/Payment/PaymentInfo";
import PersonalInfo from "../../components/Payment/PersonalInfo";
import PaymentMethod from "../../components/Payment/PaymentMethod";

class Payment extends Component {
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
            <div className="row payment py-5">
              <section className="col-lg-7 payment-info">
                <PaymentInfo />
                <PaymentMethod />
              </section>
              <secton className="col-lg-5 personal-info">
                <PersonalInfo />
              </secton>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }
}

export default Payment;
