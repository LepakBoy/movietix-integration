import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "../../assets/css/LoginStyle.css";
import banner from "../../assets/img/banner.jpg";
import jumbotron from "../../assets/img/jumbotron.png";
import google from "../../assets/logo/flat-color-icons_google.png";
import facebook from "../../assets/logo/bx_bxl-facebook-circle.png";
import axios from "../../Utils/axios";

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        email: "",
        password: ""
      },
      isError: false,
      msg: ""
    };
  }

  toHome = () => {
    this.props.history.push("/");
  };

  handleChangeForm = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value
      }
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("auth/login", this.state.form)
      .then((res) => {
        console.log(res.data.data.token);
        localStorage.setItem("token", res.data.data.token);
        this.props.history.push("/");
      })
      .catch((error) => {
        this.setState({
          isError: true,
          msg: error.response.data.msg
        });
        setTimeout(() => {
          this.setState({
            isError: false,
            msg: ""
          });
        }, 2000);
      });
  };

  handleReset = (event) => {
    event.preventDefault();
  };
  render() {
    // untuk melihat hasil inputan email dan password
    // console.log(this.state.form);
    return (
      <>
        <section className="body">
          <section className="banner">
            <div className="banner__overlay">
              <img src={jumbotron} alt="jumbotron" className="banner__overlay--jumbotron" />
              <span className="banner__overlay--slogan">wait, watch, wow!</span>
            </div>
            <img src={banner} alt="banner" className="banner__img" />
          </section>
          <section className="sign-in">
            <div className="sign-in__container">
              <div className="sign-in__logo">
                <img src="assets/logo/Tickitz .png" alt="MovieTix" />
              </div>
              <div className="title">Sign In</div>
              <p className="title__desc">
                Sign in with your data that entered during your registration
              </p>
              <form onSubmit={this.handleSubmit} onReset={this.handleReset}>
                <div className="sign-in__form--email">
                  <label htmlFor="">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Write your email"
                    onChange={this.handleChangeForm}
                  />
                </div>
                <div className="sign-in__form--password">
                  <label htmlFor="">Password</label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Write your password"
                    onChange={this.handleChangeForm}
                  />
                </div>
                <button className="sign-in__button" type="submit">
                  Sign In
                </button>
                {this.state.isError && <div className="alert alert-danger">{this.state.msg}</div>}
              </form>
              <div className="forgot-pass">
                Forgot your password?{" "}
                <span>
                  {" "}
                  <a href=""> Reset now</a>
                </span>
              </div>
              <div className="or">Or</div>
              <div className="button-group">
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
        </section>
      </>
    );
  }
}

export default LoginPage;
