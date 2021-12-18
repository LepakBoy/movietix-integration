import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ProfileBadges from "../../components/Profile/ProfileBadges";
import "../../assets/css/ProfileStyle.css";
import AccountSettings from "../../components/Profile/AccountSettings";
import OrderHistory from "../../components/Profile/OrderHistroy";
import axios from "../../Utils/axios";

const Profile = () => {
  const [dataOrder, setdataOrder] = useState([]);
  const [setting, setSetting] = useState(true);
  const dataUser = useSelector((state) => state.getDataUser);
  const { user } = dataUser;

  // console.log(dataOrder);

  const getOrder = () => {
    axios.get(`/booking/user/${user.id_user}`).then((res) => {
      setdataOrder(res.data.data);
    });
  };

  useEffect(() => {
    getOrder();
  }, []);

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <ProfileBadges first_name={dataUser.user.first_name} />
          </div>
          <div className="col-md-9">
            <div className="rofile-account-settings ps-1">
              <div className="wrapper p-3 px-4 py-4 mt-3 mb-5">
                <div className="header  pb-4">
                  <span
                    style={!setting ? { color: "#aaaaaa" } : { color: "#4e4b66" }}
                    className="me-5 profile-menu"
                    onClick={() => setSetting(true)}
                  >
                    Account Setting
                  </span>
                  {user.role === "user" ? (
                    <span
                      style={setting ? { color: "#aaaaaa" } : { colotr: "#4e4b66" }}
                      className="order-settings profile-menu"
                      onClick={() => setSetting(false)}
                    >
                      Order History
                    </span>
                  ) : null}

                  {setting ? <AccountSettings /> : <OrderHistory dataOrder={dataOrder} />}
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

export default Profile;
