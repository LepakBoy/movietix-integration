import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "../../Utils/axios";
import { Modal, Button } from "react-bootstrap";

const AccountSetings = () => {
  const [show, setShow] = useState(false);
  const dataUser = useSelector((state) => state.getDataUser);
  const { user } = dataUser;
  const [firstName, setFirstName] = useState("");
  const [getUser, setGetUser] = useState({ first_name: "", last_name: "" });
  const [newPass, setnewPass] = useState({ password: "", conPassword: "" });
  const [error, setError] = useState("");

  const getDataUser = (id) => {
    axios.get(`/user/${id}`).then((res) => {
      // console.log(res.data.data[0]);
      setGetUser({
        ...getUser,
        first_name: res.data.data[0].first_name,
        last_name: res.data.data[0].last_name
      });
    });
  };

  const handleClose = () => {
    setShow(false);
  };

  // console.log(getUser, "getuser");

  const updateUser = () => {
    axios.patch("/user/update-profile", getUser).then((res) => {
      // console.log(res.data.data.id, "res");
      getDataUser(res.data.data.id);
      setError("Success update data");
      setShow(true);
    });
  };

  const updatePass = () => {
    for (const item in newPass) {
      if (!newPass[item]) {
        setError("All input must be filled");
        setShow(true);
        return;
      }
    }
    newPass.password.split("").length >= 6
      ? axios
          .patch("/user/password", newPass)
          .then((res) => {
            setError("Success update password");
            setShow(true);
            setnewPass({ password: "", conPassword: "" });
          })
          .catch((err) => {
            setError(err.response.data.msg);
          })
      : setError("Password must be at least 6 characters");
    setShow(true);
  };
  useEffect(() => {
    getDataUser(user.id_user);
    setFirstName(user.first_name);
  }, []);

  const changeText = (e) => {
    setGetUser({
      ...getUser,
      [e.target.name]: e.target.value
    });
  };

  const changePass = (e) => {
    setnewPass({ ...newPass, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>{error.split(" ")[0] === "Success" ? "Success.." : "Oopss.."}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{error}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
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
              name="first_name"
              placeholder="adad"
              onChange={changeText}
              value={getUser.first_name}
            />
          </div>
          <div className="col-md-6 username">
            <span className="last-name-header profile-label d-block"> Last Name </span>
            <input
              className="account-settings-input py-2 ps-4 mt-2"
              type="text"
              name="last_name"
              onChange={changeText}
              value={getUser.last_name}
            />
          </div>
          <div className="col-md-6 contact mt-4">
            <span className="email-header profile-label d-block mt-2"> E-mail </span>
            <span className="email-header profile-label d-block mt-3"> {user.email} </span>
            {/* <input
              className="account-settings-input py-2 ps-4 mt-3"
              type="text"
              value={user.email}
            /> */}
          </div>
          <div className="col-md-6 contact mt-4">
            {/* <span className="phone-header profile-label d-block mt-2"> Phone Number </span>
            <input
              className="account-settings-input py-2 ps-4 mt-3"
              type="text"
              value="Phone Number"
            /> */}
          </div>
          <div className="button-update col-md-6 mt-5 pt-2">
            <button
              onClick={updateUser}
              className="button-update-account-detail profile-label w-100"
            >
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
              type="password"
              name="password"
              onChange={changePass}
              placeholder="Write your password"
              value={newPass.password}
            />
          </div>
          <div className="col-md-6 username">
            <span className="last-name-header profile-label d-block"> Confirm Password </span>
            <input
              className="account-privacy-input py-2 ps-4 mt-2 w-100"
              type="password"
              name="conPassword"
              onChange={changePass}
              placeholder="Confirm Your Password"
              value={newPass.conPassword}
            />
          </div>
          <div className="button-update col-md-6 mt-5 pt-2 pb-3">
            <button
              onClick={updatePass}
              className="button-update-account-detail profile-label w-100"
            >
              Update Changes
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountSetings;
