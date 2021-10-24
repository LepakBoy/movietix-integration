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

  componentDidMount() {
    this.setAlphabhetSeat();
  }
  setAlphabhetSeat = (row, col) => {
    // this.setState({});
    // console.log(row, col);
  };

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
              <div className="card-body">
                {rowSeat.map((item, index) => (
                  <div className="row row__seat" key={index}>
                    <div className="col">{rowSeat[index]}</div>
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
                            reserved.includes(`${rowSeat[index]}${itemLeft}`)
                              ? null
                              : selectSeat(`${rowSeat[index]}${itemLeft}`);
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
