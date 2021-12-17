import axios from "../../Utils/axios";
import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import "../../assets/css/UpcomingListStyle.css";
// import "../../../node_modules/bootstrap"
import Style from "./Upcoming.module.css";

export default function UpcomingList() {
  const [data, setData] = useState([]);
  const [month, setMonth] = useState("");

  useEffect(() => {
    getDataMovie();
  }, [month]);

  const getDataMovie = () => {
    axios
      .get(`movie/all?page=1&filter=${month}`)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const changeMonth = (e) => {
    setMonth(e);
  };

  return (
    <>
      <section className="upcoming-list">
        <div className="container">
          <header className="upcoming-list__header">
            <span className="upcoming-list__header--title">Upcoming Movie</span>
            <span className="upcoming-list__header--all">view all</span>
          </header>
          <div className="month-list">
            <div onClick={() => changeMonth("")} className="month-name" id="active">
              <span className="month-name__name">All Movies</span>
            </div>
            <div onClick={() => changeMonth(1)} className="month-name">
              <span className="month-name__name">January</span>
            </div>
            <div onClick={() => changeMonth(2)} className="month-name">
              <span className="month-name__name">February</span>
            </div>
            <div onClick={() => changeMonth(3)} className="month-name">
              <span className="month-name__name">March</span>
            </div>
            <div onClick={() => changeMonth(4)} className="month-name">
              <span className="month-name__name">April</span>
            </div>
            <div onClick={() => changeMonth(5)} className="month-name">
              <span className="month-name__name">May</span>
            </div>
            <div onClick={() => changeMonth(6)} className="month-name">
              <span className="month-name__name">June</span>
            </div>
            <div onClick={() => changeMonth(7)} className="month-name">
              <span className="month-name__name">July</span>
            </div>
            <div onClick={() => changeMonth(8)} className="month-name">
              <span className="month-name__name">August</span>
            </div>
            <div onClick={() => changeMonth(9)} className="month-name">
              <span className="month-name__name">September</span>
            </div>
            <div onClick={() => changeMonth(10)} className="month-name">
              <span className="month-name__name">October</span>
            </div>
            <div onClick={() => changeMonth(11)} className="month-name">
              <span className="month-name__name">November</span>
            </div>
            <div onClick={() => changeMonth(12)} className="month-name">
              <span className="month-name__name">Desember</span>
            </div>
          </div>
          <div className="upcoming-list__movie-list">
            {data.map((item) => (
              <div className="upcoming-list__movie-card" key={item.id_movie}>
                <img
                  src={
                    item.image
                      ? `${process.env.REACT_APP_BASEURL}uploads/movie/${item.image}`
                      : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
                  }
                  className="movie-poster_upcoming"
                  alt="movie-img"
                />
                <div className="movie-card__name">
                  <span>{item.movie_name}</span>
                </div>
                <div className="movie-card__genre">
                  <span>{item.category}</span>
                </div>
                <button className="detail-btn">Detail</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
