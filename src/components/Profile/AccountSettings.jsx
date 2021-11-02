import React from "react";

const AccountSetings = () => {
  return (
    <>
      <div className="acount-settings__detail mt-5">
        <div className="detail-header border-bottom pb-4">Details Information</div>
      </div>
      <div className="account-user-name pt-4 mt-3">
        <div className="row">
          <div className="col-md-6 username">
            <span className="first-name-header profile-label d-block"> First Name </span>
            <input
              className="account-settings-input py-2 ps-4 mt-2"
              type="text"
              value="First Name"
            />
          </div>
          <div className="col-md-6 username">
            <span className="last-name-header profile-label d-block"> Last Name </span>
            <input
              className="account-settings-input py-2 ps-4 mt-2"
              type="text"
              value="Last Name"
            />
          </div>
          <div className="col-md-6 contact mt-4">
            <span className="email-header profile-label d-block mt-2"> E-mail </span>
            <input className="account-settings-input py-2 ps-4 mt-3" type="text" value="E-mail" />
          </div>
          <div className="col-md-6 contact mt-4">
            <span className="phone-header profile-label d-block mt-2"> Phone Number </span>
            <input
              className="account-settings-input py-2 ps-4 mt-3"
              type="text"
              value="Phone Number"
            />
          </div>
          <div className="button-update col-md-6 mt-5 pt-2">
            <button className="button-update-account-detail profile-label w-100">
              Update Changes
            </button>
          </div>
        </div>
      </div>
      <div className="acount-settings__detail mt-5">
        <div className="detail-header profile-label border-bottom pb-4">Account and Privacy</div>
      </div>
      <div className="account-user-name pt-4 mt-3">
        <div className="row">
          <div className="col-md-6 username">
            <span className="first-name-header profile-label d-block"> New Password </span>
            <input
              className="account-privacy-input py-2 ps-4 mt-2 w-100"
              type="text"
              value="Write your password"
            />
          </div>
          <div className="col-md-6 username">
            <span className="last-name-header profile-label d-block"> Confirm Password </span>
            <input
              className="account-privacy-input py-2 ps-4 mt-2 w-100"
              type="text"
              value="Confirm Your Password"
            />
          </div>
          <div className="button-update col-md-6 mt-5 pt-2 pb-3">
            <button className="button-update-account-detail profile-label w-100">
              Update Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountSetings;
