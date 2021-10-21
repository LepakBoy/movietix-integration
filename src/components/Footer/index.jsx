import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "../../assets/css/FooterStyle.css";
import logo from "../../assets/logo/Tickitz .png";
import ebv from "../../assets/logo/ebv.png";
import cineone from "../../assets/logo/cineone.png";
import hiflix from "../../assets/logo/hiflix.png";
import facebook from "../../assets/logo/footer-facebook.png";
import instagram from "../../assets/logo/footer-instagram.png";
import twitter from "../../assets/logo/footer-twitter.png";
import youtube from "../../assets/logo/footer-youtube.png";

class Footer extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <>
        <section className="footer">
          <div className="footer__container">
            <div className="footer__title foot">
              <img src={logo} alt="movieTix" className="footer__title-logo" />
              <span className="foot-list">
                Stop waiting in line. Buy tickets conveniently, watch movies quietly.
              </span>
            </div>
            <div className="footer__explore foot">
              <li className="footer__explore-list list-header foot-list">Explore</li>
              <ul className="footer__explore-item">
                <li className="footer__explore-list foot-list">Cinema</li>
                <li className="footer__explore-list foot-list">Movies List</li>
                <li className="footer__explore-list foot-list">My Ticket</li>
                <li className="footer__explore-list foot-list">Notification</li>
              </ul>
            </div>
            <div className="footer__sponsor foot">
              <li className="footer__sponsor-list list-header foot-list">Our Sponsor</li>
              <ul className="footer__sponsor-item">
                <li className="footer__sponsor-list foot-list">
                  <img src={ebv} alt="ebv-id" />
                </li>
                <li className="footer__sponsor-list foot-list">
                  <img src={cineone} alt="ebv-id" />
                </li>
                <li className="footer__sponsor-list foot-list">
                  <img src={hiflix} alt="ebv-id" />
                </li>
              </ul>
            </div>
            <div className="footer__account foot">
              <li className="footer__sponsor-list list-header foot-list">Follow us</li>
              <ul className="footer__account-item">
                <li className="footer__account-list foot-list">
                  <img src={facebook} alt="facebook" className="footer-logo" />
                  <span>MovieTix Cinema id</span>
                </li>
                <li className="footer__account-list foot-list">
                  <img src={instagram} alt="instagram" className="footer-logo" />
                  <span>movieTix.id</span>
                </li>
                <li className="footer__account-list foot-list">
                  <img src={twitter} alt="twitter" className="footer-logo" />
                  <span>movieTix.id</span>
                </li>
                <li className="footer__account-list foot-list">
                  <img src={youtube} alt="youtube" className="footer-logo" />
                  <span>MovieTix Cinema id</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <footer className="footer__copyright foot">
          <div className="footer__container">
            <span>&copy; 2021 MovieTix. All Rights Reserved</span>
          </div>
        </footer>
      </>
    );
  }
}

export default withRouter(Footer);
