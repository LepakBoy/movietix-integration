import React from "react";
import dot from "../../assets/logo/dot.png";
import { connect } from "react-redux";

const ProfileBadges = (props) => {
  const { dataUser } = props;

  return (
    <>
      <div className="profile-badges">
        <div className="profile-banner__header d-flex justify-content-between p-4 px-4 mt-3">
          <span>INFO</span>
          <span>
            <img src={dot} alt="" />
          </span>
        </div>
        <div className="profile-img text-center pt-2">
          <img
            src={
              dataUser.user.user_image
                ? `${process.env.REACT_APP_BASEURL}/uploads/user/${dataUser.user.user_image}`
                : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
            }
            alt="photo"
            className="image-user"
          />
        </div>
        <div className="profile-name text-center py-3">
          <span>{`${dataUser.user.first_name} ${dataUser.user.last_name}`}</span>
        </div>
        <div className="profile-title text-center pb-5">
          <span>Moviegoers</span>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  dataUser: state.getDataUser
});

export default connect(mapStateToProps)(ProfileBadges);
