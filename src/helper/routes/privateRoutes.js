import React from "react";
import { Route, Redirect } from "react-router-dom";

// Component = dari file App.js
const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = localStorage.getItem("token");

  return (
    <Route
      {...rest}
      //   conditional render : apakah sudah login ?
      render={(props) => (isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />)}
    />
  );
};
export default PrivateRoute;
