import React from "react";
import { Redirect, Route, useLocation } from "react-router";
import { getToken } from "../Utils/Common";

const PrivateRoutes = ({ component: Component, ...rest }) => {
  let location = useLocation();
  return (
    <Route
      {...rest}
      render={(props) => {
        return getToken() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        );
      }}
    />
  );
};

export default PrivateRoutes;
