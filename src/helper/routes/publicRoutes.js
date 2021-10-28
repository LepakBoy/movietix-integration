import React from "react";
import { Route, Redirect } from "react-router-dom";

// Component = dari file App.js
// component dijadikan capital karna untuk dijadikan tag
const PublicRoute = ({ component: Component, restricted, ...props }) => {
  const isAuthenticated = localStorage.getItem("token");

  return (
    <Route
      {...props}
      //   conditional render : apakah sudah login ?
      render={(props) =>
        isAuthenticated && restricted ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};
export default PublicRoute;
