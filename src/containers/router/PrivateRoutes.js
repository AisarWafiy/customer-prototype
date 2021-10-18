import React from "react";
import { Redirect, Route, useLocation } from "react-router";
import { getToken } from "../../common/utils/Authentication";

const PrivateRoutes = ({ children, ...rest }) => {
  let location = useLocation();
  return (
    <Route
      {...rest}
      render={(props) => {
        return getToken() ? (
         children
        ) : (
          <Redirect to={{ pathname: "/login", state: { from: location } }} />
        );
      }}
    />
  );
};

export default PrivateRoutes;
