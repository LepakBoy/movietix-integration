import React from "react";
import cineone from "../../assets/logo/cineone.png";
import hiflix from "../../assets/logo/hiflix.png";

const OrderHistory = () => {
  return (
    <>
      <div className="order-list">
        {/* <!-- mapping from here --> */}
        <div className="order-list-item mt-5 p-4">
          <div className="detail-order d-flex justify-content-between border-bottom">
            <div className="detail-order-history">
              <div className="date-order pt-3">Tuesday, 07 January 2020 - 04:30pm</div>
              <div className="movie-name-order pt-2 pb-4">Spider-Man:Homecoming</div>
            </div>
            <div className="teater-logo d-flex align-items-center justify-content-end">
              <img src={cineone} alt="" />
            </div>
          </div>
          <div className="detail-ticket d-flex justify-content-between pt-3">
            <button className="ticket-status">Ticket in active</button>
            <button className="show-ticket show-detail">Show Details</button>
          </div>
        </div>
        {/* <!-- item 2 --> */}
        <div className="order-list-item mt-5 p-4">
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
        </div>
      </div>
    </>
  );
};
export default OrderHistory;
