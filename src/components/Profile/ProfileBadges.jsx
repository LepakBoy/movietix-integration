import React, { useEffect, useState } from "react";
import dot from "../../assets/logo/dot.png";
import { useSelector, useDispatch } from "react-redux";
import { getDataUser } from "../../stores/action/dataUser";
import axios from "../../Utils/axios";

export default function ProfileBadges(props) {
  const dispatch = useDispatch();
  const [dataUser, setDataUser] = useState({ first_name: "", last_name: "", image: "" });

  const user = useSelector((state) => state.getDataUser);

  // console.log(user.user, "selector");
  // const dispatch = useDispatch(getDataUser(user.user.id_user));

  useEffect(() => {
    dispatch(getDataUser(user.user.id_user)).then((res) => {
      setDataUser({
        ...dataUser,
        first_name: res.value.data.data[0].first_name,
        last_name: res.value.data.data[0].last_name,
        image: res.value.data.data[0].user_image
      });
    });
  }, [dispatch]);

  // console.log(dataUser, "dataaaa");

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
              dataUser.image
                ? `${process.env.REACT_APP_BASEURL}/uploads/user/${dataUser.image}`
                : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
            }
            alt="photo"
            className="image-user"
          />
        </div>
        <div className="profile-name text-center py-3">
          <span>{`${user.user.first_name} ${dataUser.last_name}`}</span>
        </div>
        <div className="profile-title text-center pb-5">
          <span>Moviegoers</span>
        </div>
      </div>
    </>
  );
}

// const mapStateToProps = (state) => ({
//   dataUser: state.getDataUser
// });

// export default connect(mapStateToProps)(ProfileBadges);
