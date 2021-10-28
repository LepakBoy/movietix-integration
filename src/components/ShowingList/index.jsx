import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "../../assets/css/ShowingListStyle.css";
import axios from "../../Utils/axios";

class ShowingList extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.getDataMovie();
  }

  getDataMovie = () => {
    axios
      .get("movie/all?order=id_movie")
      .then((res) => {
        this.setState({
          data: res.data.data
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  render() {
    const { data } = this.state;
    return (
      <>
        <section className="showing-list">
          <div className="container">
            <header className="showing-list__header">
              <span className="showing-list__title">Now Showing</span>
              <span className="shwoing-list__all">view all</span>
            </header>
            <div className="showing-list__movie">
              {data.map((item) => (
                <div className="showing-list__movie--banner" key={item.id_movie}>
                  <div
                    className="showing-list__movie--content px-4 py-4"
                    onClick={() => this.props.handleMovieDetail(item.id_movie)}
                  >
                    <img
                      src={
                        item.image
                          ? `http://localhost:3000/uploads/movie/${item.image}`
                          : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
                      }
                      className="movie-poster"
                      alt="movie 1"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withRouter(ShowingList);
