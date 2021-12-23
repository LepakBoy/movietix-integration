import React, { Component } from "react";
import "../../assets/css/LoginStyle.css";
import { Link, withRouter } from "react-router-dom";
import banner from "../../assets/img/banner.jpg";
import jumbotron from "../../assets/img/jumbotron.png";
import google from "../../assets/logo/flat-color-icons_google.png";
import facebook from "../../assets/logo/bx_bxl-facebook-circle.png";
import { connect } from "react-redux";
import { login } from "../../stores/action/auth";
import { getDataUser } from "../../stores/action/dataUser";

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      form: {
        email: "",
        password: "",
        error: false
      }
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

    this.props.login(this.state.form).then((res) => {
      this.props.getDataUser(res.value.data.data.id_user);

      //  kalo mau ambil data user dari store redux :
      // localStorage.setItem("token", this.props.auth.id_user);
      // res memiliki 2 property : action dan value
      localStorage.setItem("token", res.value.data.data.token);
      // this.props.getDataUser(res.value.data.data.id_user);

      this.props.history.push("/");
    });
  };

  handleReset = (event) => {
    event.preventDefault();
  };
  render() {
    // ambil dari store redux auth
    const { msg, isError } = this.props.auth;
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
                {isError ? <div className="alert alert-danger">{msg}</div> : null}
              </form>
              <div className="forgot-pass">
                Forgot your password?{" "}
                <span>
                  {" "}
                  <a href=""> Reset now</a>
                </span>
              </div>
              <div className="or">Or</div>
              <div className="forgot-pass">
                <Link to="/signup">Create new account</Link>
              </div>
              {/* <div className="button-group-login">
                <button className="button btn-google">
                  <img src={google} alt="google" className="btn-forgot__img" />{" "}
                  <span className="google">Google</span>
                </button>
                <button className="button btn-facebook">
                  <img src={facebook} alt="facebook" className="btn-forgot__img" />{" "}
                  <span className="facebook">Facebook</span>
                </button>
              </div> */}
            </div>
          </section>
        </section>
      </>
    );
  }
}
// tidak diimport karna akan memanggil state dari reducer
//memanggil state yang ada di store(reducer)
const mapStateToProps = (state) => ({
  auth: state.auth
});
// harus diimport karna akan menjalankan function dari action
//menjalankan function di action
const mapDispatchToProps = {
  login,
  getDataUser
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
