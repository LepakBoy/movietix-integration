import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../../assets/css/PaymentMethodStyle.css";
import BCA from "../../assets/logo/bca.png";
import BRI from "../../assets/logo/bri.png";
import DANA from "../../assets/logo/dana.png";
import GPAY from "../../assets/logo/google-pay.png";
import GOPAY from "../../assets/logo/gopay.png";
import OVO from "../../assets/logo/ovo.png";
import PAYPAL from "../../assets/logo/paypal.png";
import VISA from "../../assets/logo/visa.png";

class PaymentMethod extends Component {
  constructor() {
    super();
    this.state = {
      payment: ""
    };
  }

  click = (event) => {};

  render() {
    return (
      <>
        <section className="payment-method py-4">
          <div className="payment-method__header info-header pt-1">Choose a Payment Method</div>
          <div className="payment-method__option px-4 py-3">
            <div className="group-button pt-3 d-flex flex-wrap justify-content-around">
              <div className="method-payment__button g-pay d-flex mb-3 justify-content-center align-items-center">
                <img src={GPAY} alt="gpay" onClick={this.click} />
              </div>
              <div className="method-payment__button g-pay d-flex mb-3 justify-content-center align-items-center">
                <img src={VISA} alt="visa" />
              </div>
              <div className="method-payment__button g-pay d-flex mb-3 justify-content-center align-items-center">
                <img src={GOPAY} alt="gopay" />
              </div>
              <div className="method-payment__button g-pay d-flex mb-3 justify-content-center align-items-center">
                <img src={PAYPAL} alt="paypal" />
              </div>
              <div className="method-payment__button g-pay d-flex mb-3 justify-content-center align-items-center">
                <img src={DANA} alt="dana" />
              </div>
              <div className="method-payment__button g-pay d-flex mb-3 justify-content-center align-items-center">
                <img src={BCA} alt="bca" />
              </div>
              <div className="method-payment__button g-pay d-flex mb-3 justify-content-center align-items-center">
                <img src={BRI} alt="bri" />
              </div>
              <div className="method-payment__button g-pay d-flex mb-3 justify-content-center align-items-center">
                <img src={OVO} alt="ovo" />
              </div>
            </div>
            <div className="or py-4 text-center">or</div>
            <div className="option-cash pb-3 text-center">
              <span className="option-cash__link">
                Pay via cash. <a href="#">See how it work</a>{" "}
              </span>
            </div>
          </div>
        </section>
        <div className="button-payment-group d-flex py-4 justify-content-between">
          <button className="btn-payment btn-back-step flex-grow-1 me-5">Prvious step</button>
          <button
            className="btn-payment btn-confirm-payment flex-grow-1 ms-5"
            onClick={this.props.postBooking}
          >
            Pay your order
          </button>
        </div>
      </>
    );
  }
}

export default PaymentMethod;
