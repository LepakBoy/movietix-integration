import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Search } from "react-bootstrap-icons";
import "../../assets/css/NavbarStyle.css";
import menu from "../../assets/logo/menu-toggler.png";
import { connect } from "react-redux";

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

  handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  render() {
    const { dataUser } = this.props;
    const token = localStorage.getItem("token");
    console.log(token);
    console.log(dataUser.user.role, "navbar");
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
                {token ? (
                  <>
                    <li className="nav-item search-mobile mt-5">
                      <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search..."
                        aria-label="Search"
                      />
                    </li>
                    <li className="nav-item">
                      <Link to="/" className="nav-link mx-3 ms-5" aria-current="page">
                        Home
                      </Link>
                    </li>
                    {dataUser.user.role === "user" ? (
                      <li className="nav-item">
                        <Link to="/payment" className="nav-link mx-3" aria-current="page">
                          Payment
                        </Link>
                      </li>
                    ) : null}

                    {dataUser.user.role === "admin" ? (
                      <>
                        <li className="nav-item">
                          <Link to="/manage-movie" className="nav-link mx-3" aria-current="page">
                            Movies
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/manage-schedule" className="nav-link mx-3" aria-current="page">
                            Schedule
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link to="/dashboard" className="nav-link mx-3" aria-current="page">
                            Dashboard
                          </Link>
                        </li>
                      </>
                    ) : null}

                    <li className="nav-item">
                      <Link to="/profile" className="nav-link mx-3" aria-current="page">
                        Profile
                      </Link>
                    </li>
                  </>
                ) : null}
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
                      <a className="dropdown-item" onClick={this.handleLogout}>
                        Logout
                      </a>
                    </li>
                    <li>
                      <Link to="/signup" className="dropdown-item" aria-current="page">
                        Signup
                      </Link>
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
                {token ? (
                  <img
                    src={
                      dataUser.user.user_image
                        ? `http://localhost:3000/uploads/user/${dataUser.user.user_image}`
                        : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
                    }
                    alt="photo"
                    className="user-photo nav-search nav-item"
                  />
                ) : (
                  <button className="btn btn-sign-up-navbar" id="btn-sign-up-navbar" type="submit">
                    <Link to="/login" style={{ textDecoration: "none", color: "white" }}>
                      {" "}
                      Login{" "}
                    </Link>
                  </button>
                )}
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

const mapStateToProps = (state) => ({
  dataUser: state.getDataUser
});

export default connect(mapStateToProps)(Navbar);
