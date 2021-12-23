import React, { useState } from "react";
import { Link, withRouter } from "react-router-dom";
import "../../assets/css/SignupStyle.css";
import banner from "../../assets/img/banner.jpg";
import google from "../../assets/logo/flat-color-icons_google.png";
import facebook from "../../assets/logo/bx_bxl-facebook-circle.png";
import { connect } from "react-redux";
import { register } from "../../stores/action/auth";
import { Modal, Button } from "react-bootstrap";

const Signup = (props) => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const [dataRegister, setDataRegister] = useState({});

  const handleChangeForm = (e) => {
    setDataRegister({
      ...dataRegister,
      [e.target.name]: e.target.value
    });
  };

  const handleClose = () => {
    setShow(false);
    error.split(" ")[0] === "Success" ? props.history.push("/login") : null;
  };

  const submitRegister = (e) => {
    e.preventDefault();

    if (dataRegister.password.length < 6) {
      setError("Password at least 6 characters");
      setShow(true);
      return;
    }
    props
      .register(dataRegister)
      .then((res) => {
        setError("Success register, please check your email for account activation before login");
        setShow(true);
      })
      .then((err) => {
        console.log(err, "reeeeeeeee");
      });
  };

  const { msg, isError } = props.auth;

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>{error.split(" ")[0] === "Success" ? "Success.." : "Oopss.."}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{error}</Modal.Body>
        <Modal.Footer>
          <Button variant={"primary"} onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="body">
        <section className="banner-signup">
          <div className="banner__overlay-signup">
            <div className="banner-content mt-5">
              <h2>Lets build your account</h2>
              <span>
                To be a loyal moviegoer and access all of features, your details are required.
              </span>
            </div>
          </div>
          <img src={banner} className="banner__img" />
        </section>
        <section className="sign-up">
          <div className="sign-in__container">
            <div className="sign-in__logo">
              <img src="assets/logo/Tickitz .png" alt="MovieTix" />
            </div>
            <div className="title">Fill your additional details</div>
            <form action="" onSubmit={submitRegister}>
              <div className="sign-in__form--first-name">
                <label htmlFor="">First Name</label>
                <input
                  type="text"
                  placeholder="Write your First Name"
                  name="first_name"
                  onChange={handleChangeForm}
                />
              </div>
              <div className="sign-in__form--last-name">
                <label htmlFor="">Last Name</label>
                <input
                  type="text"
                  placeholder="Write your Last Name"
                  name="last_name"
                  onChange={handleChangeForm}
                />
              </div>
              <div className="sign-in__form--email">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  placeholder="Write your email"
                  name="email"
                  onChange={handleChangeForm}
                />
              </div>
              <div className="sign-in__form--password">
                <label htmlFor="">Password</label>
                <input
                  type="password"
                  placeholder="Write your password"
                  name="password"
                  onChange={handleChangeForm}
                />
              </div>
              <div className="form-check d-flex p-0 align-items-center justify-content-start mt-4">
                <input type="checkbox" className="input-check" />
                <label htmlFor="" className="label-check m-0">
                  I agree to terms & conditions
                </label>
              </div>
              <button className="sign-in__button">Join for free now</button>
              {isError && <div className="alert alert-danger">{msg}</div>}
            </form>

            <div className="forgot-pass">
              Do you already have an account? <Link to="/login">Log in</Link>
            </div>
            <div className="or">Or</div>
            <div className="button-group-signup">
              <button className="button btn-google">
                <img src={google} alt="google" className="btn-forgot__img" />{" "}
                <span className="google">Google</span>
              </button>
              <button className="button btn-facebook">
                <img src={facebook} alt="facebook" className="btn-forgot__img" />{" "}
                <span className="facebook">Facebook</span>
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth
});
// harus diimport karna akan menjalankan function dari action
//menjalankan function di action
const mapDispatchToProps = {
  register
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
