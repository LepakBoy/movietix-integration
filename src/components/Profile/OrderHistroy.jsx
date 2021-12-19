import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import cineone from "../../assets/logo/cineone.png";
import hiflix from "../../assets/logo/hiflix.png";
import ebv from "../../assets/logo/ebv.png";

const OrderHistory = (props) => {
  const history = useHistory();
  const [dataHistory, setDataHistory] = useState([]);

  useEffect(() => {
    setDataHistory(props.dataOrder);
  }, []);

  const toTicket = (id) => {
    history.push(`/ticket/${id}`);
  };

  return (
    <>
      <div className="order-list">
        {/* <!-- mapping from here --> */}
        {dataHistory.length > 0
          ? dataHistory.map((item) => (
              <div className="order-list-item mt-5 p-4" key={item.id_booking}>
                <div className="detail-order d-flex justify-content-between border-bottom">
                  <div className="detail-order-history">
                    <div className="date-order pt-3">{`${item.date_booking.split("T")[0]} - ${
                      item.time_booking
                    }`}</div>
                    <div className="movie-name-order pt-2 pb-4">{item.movie_name}</div>
                  </div>
                  <div className="teater-logo d-flex align-items-center justify-content-end">
                    <img
                      src={
                        item.teater_name === "ebu.ud"
                          ? ebv
                          : item.teater_name === "hiflix"
                          ? hiflix
                          : cineone
                      }
                      alt=""
                    />
                  </div>
                </div>
                <div className="detail-ticket d-flex justify-content-between pt-3">
                  <button
                    className={
                      item.booking_status === "not active"
                        ? "ticket-pending ticket-status"
                        : "ticket-active ticket-status"
                    }
                  >
                    {item.booking_status === "not active" ? "Waiting for payment" : "Active"}
                  </button>
                  <button
                    onClick={() => toTicket(item.id_booking)}
                    className="show-ticket show-detail"
                  >
                    Show Details
                  </button>
                </div>
              </div>
            ))
          : null}

        {/* <!-- item 2 --> */}
        {/* <div className="order-list-item mt-5 p-4">
          <div className="detail-order d-flex justify-content-between border-bottom">
            <div className="detail-order-history">
              <div className="date-order pt-3">Tuesday, 07 January 2020 - 04:30pm</div>
              <div className="movie-name-order pt-2 pb-4">Spider-Man:Homecoming</div>
            </div>
            <div className="teater-logo d-flex align-items-center justify-content-end">
              <img src={hiflix} alt="" />
            </div>
          </div>
          <div className="detail-ticket d-flex justify-content-between pt-3">
            <button className="ticket-status">Ticket in active</button>
            <button className="show-ticket show-detail">Show Details</button>
          </div>
        </div> */}
      </div>
    </>
  );
};
export default OrderHistory;
