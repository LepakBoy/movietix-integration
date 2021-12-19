import React, { Component } from "react";

import "../../assets/css/ShowingListStyle.css";
import { connect } from "react-redux";

import axios from "../../Utils/axios";

class ShowingList extends Component {
  constructor(props) {
    super();
    this.state = {
      data: [],
      month: new Date().toISOString().split("T")[0].split("-")[1]
    };
  }

  componentDidMount() {
    this.getDataMovie();
  }

  getDataMovie = () => {
    axios
      .get(`movie/all?order=id_movie&filter=${this.state.month}`)
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
    const { dataUser } = this.props;

    return (
      <>
        <section className="showing-list">
          <div className="container">
            <header className="showing-list__header">
              <span className="showing-list__title">Now Showing</span>
              <span className="shwoing-list__all">view all</span>
            </header>
            <div className="showing-list__movie">
              {data.length > 0 ? (
                data.map((item) => (
                  <div className="showing-list__movie--banner" key={item.id_movie}>
                    <div
                      className="showing-list__movie--content px-4 py-4"
                      onClick={
                        dataUser.user.role === "user"
                          ? () => this.props.handleMovieDetail(item.id_movie)
                          : null
                      }
                    >
                      <img
                        src={
                          item.image
                            ? `${process.env.REACT_APP_BASEURL}uploads/movie/${item.image}`
                            : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
                        }
                        className="movie-poster"
                        alt="movie-banner"
                      />
                      <div>
                        <p className="movie-card__name text-center ">{item.movie_name}</p>
                      </div>
                      <div className="movie-card__genre text-center">
                        <span>{item.category}</span>
                      </div>
                      <div className="movie-card__genre text-center">
                        <span>{item.director}</span>
                      </div>
                      {dataUser.user.role === "user" ? (
                        <button className="detail-btn mt-2 w-100">Detail</button>
                      ) : null}
                    </div>
                  </div>
                ))
              ) : (
                <div>no data</div>
              )}
            </div>
          </div>
        </section>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  dataUser: state.getDataUser
});
export default connect(mapStateToProps)(ShowingList);
