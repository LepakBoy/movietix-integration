import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import axios from "../../Utils/axios";
import QRCode from "react-qr-code";

const Ticket = (props) => {
  const [dataTicket, setDataTicket] = useState({});

  const getTicket = (id) => {
    axios.get(`/booking/${id}`).then((res) => {
      setDataTicket(res.data.data);
    });
  };

  useEffect(() => {
    getTicket(props.match.params.id);
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row pt-3 mt-3">
          <div className="form-movie col-md-12 px-0">
            <div className="form-movie__header">Ticket</div>
            <div className="wrapper p-4  mt-4 mb-5">
              <div className="form-movie__data row">
                <div className="col-md-8">
                  <div className="row">
                    <div className="col-md-6 left-side">
                      <div className="movie-name">
                        <div className="my-1  ticket-label">Movie </div>
                        <span className="mb-4 ticket-data">{dataTicket.movie_name}</span>
                      </div>
                      <div className="movie-director">
                        <div className=" my-1 ticket-label">Date & TIme</div>
                        <span className="mb-4 ticket-data">
                          {dataTicket.date_booking
                            ? `${dataTicket.date_booking.split("T")[0]} ${dataTicket.time_booking}`
                            : null}
                        </span>
                      </div>
                      <div className="movie-release">
                        <div className="col-6 hour ps-0">
                          <div className=" my-1 ticket-label">Price</div>
                          <span className="mb-4 ticket-data">{`Rp. ${dataTicket.payment_total}`}</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 right-side pe-0">
                      <div className="movie-category">
                        <div className=" my-1 ticket-label">Count</div>
                        <span className="mb-4 ticket-data">{`${dataTicket.total_ticket} seats`}</span>
                      </div>
                      <div className="movie-cast">
                        <div className="my-1 ticket-label">Seats</div>
                        <span className="mb-4 ticket-data">
                          {dataTicket.seat ? dataTicket.seat.join(", ") : null}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 ">
                  <div className="d-flex justify-content-center align-items-center  h-100 wi">
                    <QRCode
                      value={`${process.env.REACT_APP_BASEURL}/booking/ticket-status/${dataTicket.id_booking}`}
                    />
                  </div>
                </div>

                <div className="button-group row  py-3 my-2">
                  <div className="col-md-12 justify-content-end d-flex ">
                    {/* <button className="movie-manage-button button-reset me-5" type="reset">
                      Reset
                    </button> */}
                    {/* <button className="movie-manage-button button-submit" type="submit">
                      aaa
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Ticket;
