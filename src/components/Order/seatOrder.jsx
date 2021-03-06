import React, { Component } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../../assets/css/OrderSeatStyle.css";

class OrderSeat extends Component {
  constructor() {
    super();
    this.state = {
      listSeat: ["A", "B", "C", "D", "E", "F", "G"],
      leftSideSeat: [1, 2, 3, 4, 5, 6, 7],
      rightSideSeat: [8, 9, 10, 11, 12, 13, 14]
    };
  }

  render() {
    const rowSeat = this.state.listSeat;
    const { leftSideSeat, rightSideSeat } = this.state;
    const { selectSeat, reserved, selected } = this.props;
    return (
      <>
        <div className="main__seat-selector">
          <header className="seat-selector__header">Choose Your Seat</header>
          <div className="seat-selector mt-4">
            <div className="card">
              <div className="screen">
                <span>Screen</span>
                <div className="screen-layout"></div>
              </div>
              <div className="card-body ">
                {rowSeat.map((item, index) => (
                  <div className="row row__seat" key={index}>
                    <div className="col alphabet">{rowSeat[index]}</div>
                    {leftSideSeat.map((itemLeft) => (
                      <div className="col col__seat" key={`${rowSeat[index]}${itemLeft}`}>
                        <div
                          className={`seat__list ${
                            reserved.includes(`${rowSeat[index]}${itemLeft}`)
                              ? "seat__list--sold"
                              : selected.includes(`${rowSeat[index]}${itemLeft}`)
                              ? "seat__list--selected"
                              : "seat__list--available"
                          }  seat__list--available`}
                          onClick={() => {
                            selectSeat(`${rowSeat[index]}${itemLeft}`);
                          }}
                        ></div>
                      </div>
                    ))}
                    <div className="col col__separator"></div>
                    {rightSideSeat.map((itemRight) => (
                      <div className="col col__seat" key={`${rowSeat[index]}${itemRight}`}>
                        <div
                          className={`seat__list ${
                            reserved.includes(`${rowSeat[index]}${itemRight}`)
                              ? "seat__list--sold"
                              : selected.includes(`${rowSeat[index]}${itemRight}`)
                              ? "seat__list--selected"
                              : "seat__list--available"
                          }  seat__list--available`}
                          onClick={() => {
                            this.props.selectSeat(`${rowSeat[index]}${itemRight}`);
                          }}
                        ></div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
              <div className="seating-key">
                <span>Seating key</span>
                <div className="seat-desc">
                  <div className="seat-item seat-available">
                    <div className="seat__desc-item available"></div>
                    <span>Available</span>
                  </div>
                  <div className="seat-item seat-available">
                    <div className="seat__desc-item selected"></div>
                    <span>Selected</span>
                  </div>
                  <div className="seat-item seat-available">
                    <div className="seat__desc-item love-nest"></div>
                    <span>Love-Nest</span>
                  </div>
                  <div className="seat-item seat-available">
                    <div className="seat__desc-item sold"></div>
                    <span>Sold</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="button-group pt-4">
            <button className="seat__btn-change-movie">Change your movie</button>
            <button className="seat__btn-change-chekout" onClick={this.props.booking}>
              Checkout now
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default OrderSeat;
