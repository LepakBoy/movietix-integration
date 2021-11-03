import React from "react";
import { Route, Redirect } from "react-router";
import { useSelector } from "react-redux";

const AdminRoute = ({ component: Component, ...rest }) => {
  const dataUser = useSelector((state) => state.getDataUser);
  //   const { dataUser } = props;
  const role = dataUser.user.role;

  return (
    <Route
      {...rest}
      render={(props) => (role === "admin" ? <Component {...props} /> : <Redirect to="/" />)}
    />
  );
};

export default AdminRoute;
