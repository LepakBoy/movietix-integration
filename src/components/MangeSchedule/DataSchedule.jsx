import React from "react";
import TeaterLogo from "../../assets/logo/ebv.png";

const DataSchedule = () => {
  return (
    <>
      <div className="row mt-5 pt-3 justify-content-between">
        <div className="data-schedule col-md-12">
          <div className="data-schedule__header d-flex justify-content-between">
            <span>Data Schedule</span>
            <div className="sort-option d-flex">
              <div className="dropdown search-schedule">
                <button
                  className="btn btn-secondary dropdown-toggle w-100"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Sort
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
              <div className="dropdown search-schedule mx-3">
                <button
                  className="btn btn-secondary dropdown-toggle w-100"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Location
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
              <div className="dropdown search-schedule">
                <button
                  className="btn btn-secondary dropdown-toggle w-100"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Movie
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="wrapper p-4 pt-5 mt-4 mb-5 ">
            <div className="data-schedule__data ">
              <div className="row d-flex flex-wrap justify-content-between">
                {/* <!-- mapping from here --> */}
                <div className="col-lg-4 schedule-list">
                  <div className="card p-3 mt-3">
                    <div className="header d-flex justify-content-md-between">
                      <div className="logo pe-4">
                        <img src={TeaterLogo} className="cinema-logo" alt="" />
                      </div>
                      <div className="cinema-detail">
                        <div className="cinema-detail__name text-start pb-1">ebv.id</div>
                        <div className="cinema-detail__address text-start">
                          Whatever street No.12, South Purwokerto
                        </div>
                      </div>
                    </div>
                    <div className="time-schedule-list d-flex justify-content-sm-start flex-wrap pt-4">
                      <span className="w-25 time-list">08.30am</span>
                      <span className="w-25 time-list">10.30pm</span>
                      <span className="w-25 time-list">12.00pm</span>
                      <span className="w-25 time-list">02.00pm</span>
                      <span className="w-25 time-list">04.30pm</span>
                      <span className="w-25 time-list">07.00pm</span>
                      <span className="w-25 time-list">08.30pm</span>
                    </div>
                    <div className="schedule-price d-flex justify-content-between pt-4">
                      <div className="price-title">Price</div>
                      <div className="price-amount">Rp. 40.000/seat</div>
                    </div>
                    <div className="booking-button pt-4 d-flex">
                      <button className="btn-update w-100 me-2">Update</button>
                      <button className="btn-delete w-100 ms-2">Delete</button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 schedule-list">
                  <div className="card p-3 mt-3">
                    <div className="header d-flex justify-content-md-between">
                      <div className="logo pe-4">
                        <img src={TeaterLogo} className="cinema-logo" alt="" />
                      </div>
                      <div className="cinema-detail">
                        <div className="cinema-detail__name text-start pb-1">ebv.id</div>
                        <div className="cinema-detail__address text-start">
                          Whatever street No.12, South Purwokerto
                        </div>
                      </div>
                    </div>
                    <div className="time-schedule-list d-flex justify-content-sm-start flex-wrap pt-4">
                      <span className="w-25 time-list">08.30am</span>
                      <span className="w-25 time-list">10.30pm</span>
                      <span className="w-25 time-list">12.00pm</span>
                      <span className="w-25 time-list">02.00pm</span>
                      <span className="w-25 time-list">04.30pm</span>
                      <span className="w-25 time-list">07.00pm</span>
                      <span className="w-25 time-list">08.30pm</span>
                    </div>
                    <div className="schedule-price d-flex justify-content-between pt-4">
                      <div className="price-title">Price</div>
                      <div className="price-amount">Rp. 40.000/seat</div>
                    </div>
                    <div className="booking-button pt-4 d-flex">
                      <button className="btn-update w-100 me-2">Update</button>
                      <button className="btn-delete w-100 ms-2">Delete</button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 schedule-list">
                  <div className="card p-3 mt-3">
                    <div className="header d-flex justify-content-md-between">
                      <div className="logo pe-4">
                        <img src={TeaterLogo} className="cinema-logo" alt="" />
                      </div>
                      <div className="cinema-detail">
                        <div className="cinema-detail__name text-start pb-1">ebv.id</div>
                        <div className="cinema-detail__address text-start">
                          Whatever street No.12, South Purwokerto
                        </div>
                      </div>
                    </div>
                    <div className="time-schedule-list d-flex justify-content-sm-start flex-wrap pt-4">
                      <span className="w-25 time-list">08.30am</span>
                      <span className="w-25 time-list">10.30pm</span>
                      <span className="w-25 time-list">12.00pm</span>
                      <span className="w-25 time-list">02.00pm</span>
                      <span className="w-25 time-list">04.30pm</span>
                      <span className="w-25 time-list">07.00pm</span>
                      <span className="w-25 time-list">08.30pm</span>
                    </div>
                    <div className="schedule-price d-flex justify-content-between pt-4">
                      <div className="price-title">Price</div>
                      <div className="price-amount">Rp. 40.000/seat</div>
                    </div>
                    <div className="booking-button pt-4 d-flex">
                      <button className="btn-update w-100 me-2">Update</button>
                      <button className="btn-delete w-100 ms-2">Delete</button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 schedule-list">
                  <div className="card p-3 mt-3">
                    <div className="header d-flex justify-content-md-between">
                      <div className="logo pe-4">
                        <img src={TeaterLogo} className="cinema-logo" alt="" />
                      </div>
                      <div className="cinema-detail">
                        <div className="cinema-detail__name text-start pb-1">ebv.id</div>
                        <div className="cinema-detail__address text-start">
                          Whatever street No.12, South Purwokerto
                        </div>
                      </div>
                    </div>
                    <div className="time-schedule-list d-flex justify-content-sm-start flex-wrap pt-4">
                      <span className="w-25 time-list">08.30am</span>
                      <span className="w-25 time-list">10.30pm</span>
                      <span className="w-25 time-list">12.00pm</span>
                      <span className="w-25 time-list">02.00pm</span>
                      <span className="w-25 time-list">04.30pm</span>
                      <span className="w-25 time-list">07.00pm</span>
                      <span className="w-25 time-list">08.30pm</span>
                    </div>
                    <div className="schedule-price d-flex justify-content-between pt-4">
                      <div className="price-title">Price</div>
                      <div className="price-amount">Rp. 40.000/seat</div>
                    </div>
                    <div className="booking-button pt-4 d-flex">
                      <button className="btn-update w-100 me-2">Update</button>
                      <button className="btn-delete w-100 ms-2">Delete</button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 schedule-list">
                  <div className="card p-3 mt-3">
                    <div className="header d-flex justify-content-md-between">
                      <div className="logo pe-4">
                        <img src={TeaterLogo} className="cinema-logo" alt="" />
                      </div>
                      <div className="cinema-detail">
                        <div className="cinema-detail__name text-start pb-1">ebv.id</div>
                        <div className="cinema-detail__address text-start">
                          Whatever street No.12, South Purwokerto
                        </div>
                      </div>
                    </div>
                    <div className="time-schedule-list d-flex justify-content-sm-start flex-wrap pt-4">
                      <span className="w-25 time-list">08.30am</span>
                      <span className="w-25 time-list">10.30pm</span>
                      <span className="w-25 time-list">12.00pm</span>
                      <span className="w-25 time-list">02.00pm</span>
                      <span className="w-25 time-list">04.30pm</span>
                      <span className="w-25 time-list">07.00pm</span>
                      <span className="w-25 time-list">08.30pm</span>
                    </div>
                    <div className="schedule-price d-flex justify-content-between pt-4">
                      <div className="price-title">Price</div>
                      <div className="price-amount">Rp. 40.000/seat</div>
                    </div>
                    <div className="booking-button pt-4 d-flex">
                      <button className="btn-update w-100 me-2">Update</button>
                      <button className="btn-delete w-100 ms-2">Delete</button>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 schedule-list">
                  <div className="card p-3 mt-3">
                    <div className="header d-flex justify-content-md-between">
                      <div className="logo pe-4">
                        <img src={TeaterLogo} className="cinema-logo" alt="" />
                      </div>
                      <div className="cinema-detail">
                        <div className="cinema-detail__name text-start pb-1">ebv.id</div>
                        <div className="cinema-detail__address text-start">
                          Whatever street No.12, South Purwokerto
                        </div>
                      </div>
                    </div>
                    <div className="time-schedule-list d-flex justify-content-sm-start flex-wrap pt-4">
                      <span className="w-25 time-list">08.30am</span>
                      <span className="w-25 time-list">10.30pm</span>
                      <span className="w-25 time-list">12.00pm</span>
                      <span className="w-25 time-list">02.00pm</span>
                      <span className="w-25 time-list">04.30pm</span>
                      <span className="w-25 time-list">07.00pm</span>
                      <span className="w-25 time-list">08.30pm</span>
                    </div>
                    <div className="schedule-price d-flex justify-content-between pt-4">
                      <div className="price-title">Price</div>
                      <div className="price-amount">Rp. 40.000/seat</div>
                    </div>
                    <div className="booking-button pt-4 d-flex">
                      <button className="btn-update w-100 me-2">Update</button>
                      <button className="btn-delete w-100 ms-2">Delete</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DataSchedule;
