import React, { useEffect, useState, useRef } from "react";
import dot from "../../assets/logo/dot.png";
import { useSelector, useDispatch } from "react-redux";
import { getDataUser } from "../../stores/action/dataUser";
import axios from "../../Utils/axios";
import { Modal, Button } from "react-bootstrap";

export default function ProfileBadges(props) {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");
  const target = useRef(null);
  const dispatch = useDispatch();
  const [dataUser, setDataUser] = useState({ first_name: "", last_name: "" });
  const [image, setImage] = useState({ user_image: "" });

  const user = useSelector((state) => state.getDataUser);

  const handleClose = () => {
    setShow(false);
  };

  const updateImage = () => {
    if (image.user_image) {
      const formData = new FormData();
      for (const data in image) {
        formData.append(data, image[data]);
      }

      axios
        .patch("/user/change-photo", formData)
        .then((res) => {
          dispatch(getDataUser(user.user.id_user));
          setError("Success update image");
          setShow(true);
        })
        .catch((err) => {
          setError(err.response.data.msg);
          setShow(true);
        });
    }
  };

  const uploadImage = (e) => {
    setImage({ ...image, user_image: e.target.files[0] });
  };

  useEffect(() => {
    updateImage();
    // dispatch(getDataUser(user.user.id_user)).then((res) => {
    //   setDataUser({
    //     ...dataUser,
    //     first_name: res.value.data.data[0].first_name,
    //     last_name: res.value.data.data[0].last_name
    //   });
    // });
  }, [image]);

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Modal.Header>
          <Modal.Title>{error.split(" ")[0] === "Success" ? "Success.." : "Oopss.."}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{error}</Modal.Body>
        <Modal.Footer>
          <Button variant={"primary"} onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
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
              user.user.user_image
                ? `${process.env.REACT_APP_BASEURL}/uploads/user/${user.user.user_image}`
                : "https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
            }
            alt="photo"
            className="image-user"
          />
          <input
            type="file"
            name="user_image"
            ref={target}
            style={{ display: "none" }}
            onChange={(e) => uploadImage(e)}
          />
          <button
            className="d-block mt-4 mx-auto button-submit btn-image"
            onClick={() => target.current.click()}
          >
            Choose image
          </button>
        </div>
        <div className="profile-name text-center py-3">
          <span>{`${user.user.first_name} ${user.user.last_name}`}</span>
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
