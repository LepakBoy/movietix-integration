import React from "react";
import "../../assets/css/SignupStyle.css";
import banner from "../../assets/img/banner.jpg";
import google from "../../assets/logo/flat-color-icons_google.png";
import facebook from "../../assets/logo/bx_bxl-facebook-circle.png";

const Signup = () => {
  return (
    <>
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
            <div className="sign-in__form--email">
              <label htmlFor="">Email</label>
              <input type="email" placeholder="Write your email" />
            </div>
            <div className="sign-in__form--password">
              <label htmlFor="">Password</label>
              <input type="password" placeholder="Write your password" />
            </div>
            <div className="form-check d-flex p-0 align-items-center justify-content-start mt-4">
              <input type="checkbox" className="input-check" />
              <label htmlFor="" className="label-check m-0">
                I agree to terms & conditions
              </label>
            </div>
            <button className="sign-in__button">Join for free now</button>
            <div className="forgot-pass">
              Do you already have an account? <a href="home-page.html">Log in</a>
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

export default Signup;
