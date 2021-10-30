import React from "react";
import photoUser from "../../assets/img/photo profile.png";
import dot from "../../assets/logo/dot.png";

const ProfileBadges = () => {
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
          <img src={photoUser} alt="photo" className="image-user" />
        </div>
        <div className="profile-name text-center py-3">
          <span>Jonos El Rodriguez</span>
        </div>
        <div className="profile-title text-center pb-5">
          <span>Moviegoers</span>
        </div>
      </div>
    </>
  );
};

export default ProfileBadges;
