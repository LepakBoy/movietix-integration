import React, { useState } from "react";
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

const PaymentMethod = (props) => {
  const [payment, setPayment] = useState("");

  const handlePayment = (data) => {
    setPayment(data);
  };

  console.log(payment);
  return (
    <>
      <section className="payment-method py-4">
        <div className="payment-method__header info-header pt-1">Choose a Payment Method</div>
        <div className="payment-method__option px-4 py-3">
          <div className="group-button pt-3 d-flex flex-wrap justify-content-around">
            <div
              className={`method-payment__button g-pay d-flex mb-3 justify-content-center align-items-center ${
                payment === "gpay" ? "selected-payment" : ""
              }`}
            >
              <img src={GPAY} alt="gpay" onClick={() => handlePayment("gpay")} />
            </div>
            <div
              className={`method-payment__button g-pay d-flex mb-3 justify-content-center align-items-center ${
                payment === "visa" ? "selected-payment" : ""
              }`}
            >
              <img src={VISA} alt="visa" onClick={() => handlePayment("visa")} />
            </div>
            <div
              className={`method-payment__button g-pay d-flex mb-3 justify-content-center align-items-center ${
                payment === "gopay" ? "selected-payment" : ""
              }`}
            >
              <img src={GOPAY} alt="gopay" onClick={() => handlePayment("gopay")} />
            </div>
            <div
              className={`method-payment__button g-pay d-flex mb-3 justify-content-center align-items-center ${
                payment === "paypal" ? "selected-payment" : ""
              }`}
            >
              <img src={PAYPAL} alt="paypal" onClick={() => handlePayment("paypal")} />
            </div>
            <div
              className={`method-payment__button g-pay d-flex mb-3 justify-content-center align-items-center ${
                payment === "dana" ? "selected-payment" : ""
              }`}
            >
              <img src={DANA} alt="dana" onClick={() => handlePayment("dana")} />
            </div>
            <div
              className={`method-payment__button g-pay d-flex mb-3 justify-content-center align-items-center ${
                payment === "bca" ? "selected-payment" : ""
              }`}
            >
              <img src={BCA} alt="bca" onClick={() => handlePayment("bca")} />
            </div>
            <div
              className={`method-payment__button g-pay d-flex mb-3 justify-content-center align-items-center ${
                payment === "bri" ? "selected-payment" : ""
              }`}
            >
              <img src={BRI} alt="bri" onClick={() => handlePayment("bri")} />
            </div>
            <div
              className={`method-payment__button g-pay d-flex mb-3 justify-content-center align-items-center ${
                payment === "ovo" ? "selected-payment" : ""
              }`}
            >
              <img src={OVO} alt="ovo" onClick={() => handlePayment("ovo")} />
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
          onClick={props.postBooking}
        >
          Pay your order
        </button>
      </div>
    </>
  );
};

export default PaymentMethod;
