import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../../assets/css/PersonalInfoStyle.css";
import Warning from "../../assets/logo/warning.png";
import { useSelector } from "react-redux";

const PersonalInfo = () => {
  const user = useSelector((state) => state.getDataUser);
  console.log(user.user, "userrrrrrrrrrr");
  return (
    <>
      <div className="user-info__header info-header pb-3">Personal Info</div>
      <div className="personal-info__detail px-4 py-3">
        <div className="name-input personal-group py-3">
          <label className="d-block personal-info__label" htmlFor="">
            Full Name
          </label>
          <input
            className="input-personal-info mt-2"
            type="text"
            name=""
            id=""
            placeholder="Type Your Full Name Here"
            value={`${user.user.first_name} ${user.user.last_name}`}
          />
        </div>
        <div className="email-input personal-group py-3">
          <label className="d-block personal-info__label" htmlFor="">
            Email
          </label>
          <input
            className="input-personal-info mt-2"
            type="email"
            name=""
            id=""
            placeholder="Type Your Email Here"
            value={`${user.user.email} `}
          />
        </div>
        {/* <div className="phone-input personal-group py-3">
          <label className="d-block personal-info__label" htmlFor="">
            Phone Number
          </label>
          <input
            className="input-personal-info mt-2"
            type="number"
            name=""
            id=""
            placeholder="Fill Your Phone Number Here"
          />
        </div> */}
        {!user ? (
          <div className="personal-info__description text-center my-3 p-2 ps-5 d-flex justify-content-start align-items-center">
            <img src={Warning} alt="" />{" "}
            <span className="personal-info-desc px-4">Fill your data correctly</span>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default PersonalInfo;
