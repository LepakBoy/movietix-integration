import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

// import "../../assets/logo/menu-toggler.png";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Search } from "react-bootstrap-icons";
import "../../assets/css/NavbarStyle.css";
import menu from "../../assets/logo/menu-toggler.png";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name
    };
  }

  toLogin = () => {
    this.props.history.push("/login");
  };

  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <img src="../../assets/logo/Tickitz .png" alt="logo" />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <img src={menu} className="menu-toggler" alt="menu" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item search-mobile mt-5">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search..."
                    aria-label="Search"
                  />
                </li>
                <li className="nav-item">
                  <Link to="/home" className="nav-link mx-3 ms-5" aria-current="page">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/basic-react" className="nav-link mx-3" aria-current="page">
                    Payment
                  </Link>
                </li>

                <li className="nav-item">
                  <a className="nav-link mx-3" href="order-page.html">
                    Profile
                  </a>
                </li>
              </ul>
              <form className="d-flex" id="search-navbar">
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Location
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li>
                      <a className="dropdown-item" href="index.html">
                        Login
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="movie-detail.html">
                        Movie detail
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </li>
                <Search className="BsSearch" />
                <i className="BsSearch nav-search nav-item"></i>
                <button
                  onClick={this.toLogin}
                  className="btn btn-sign-up-navbar"
                  id="btn-sign-up-navbar"
                  type="submit"
                >
                  Sign up
                </button>
              </form>
              <li className="nav-item footer-nav-mobile">
                <a className="nav-link mx-3" href="#">
                  &copy; 2021 MovieTix. All Rights Reserved
                </a>
              </li>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default withRouter(Navbar);
