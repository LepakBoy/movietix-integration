import React from "react";
import banner from "../../assets/img/banner.jpg";
import logo from "../../assets/img/jumbotron.png";

const ResetPassword = () => {
  return (
    <>
      <div className="body">
        <section className="banner">
          <div className="banner__overlay">
            <div className="wrapper-banner">
              <header className="banner-header">
                <img src={logo} alt="jumbotron" className="banner__overlay--jumbotron" />
              </header>
              <div className="banner-content mt-5">
                <span>Reset your password</span>
              </div>
            </div>
          </div>
          <img src={banner} alt="banner" className="banner__img" />
        </section>
        <section className="sign-in">
          <div className="sign-in__container">
            <div className="sign-in__logo">
              <img src="assets/logo/Tickitz .png" alt="MovieTix" />
            </div>
            <div className="title">Fill your additional details</div>
            <div className="sign-in__form--email">
              <label htmlFor="">New Password</label>
              <input type="email" placeholder="Write your new password" />
            </div>
            <div className="sign-in__form--password">
              <label htmlFor="">New Password</label>
              <input type="password" placeholder="Confrim your new password" />
            </div>
            <div className="form-check d-flex p-0 align-items-center justify-content-start mt-4"></div>
            <button className="sign-in__button">Reset your password</button>
          </div>
        </section>
      </div>

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
      ></script>
    </>
  );
};

export default ResetPassword;
