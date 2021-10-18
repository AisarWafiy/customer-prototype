import React, { useContext } from "react";
import { Redirect, Route, Switch, useLocation } from "react-router";
import { getToken } from "../../common/utils/Authentication";
import Login from "../login/Login";
import PrivateRoutes from "./PrivateRoutes";
import RouteContext from "./RouteContext";

const Routes = ({ component: Component, ...rest }) => {

  const routes = useContext(RouteContext)
 
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      {routes.map((i, index) => (
      <PrivateRoutes key={index} {...i.props}>
       {i.component}
      </PrivateRoutes>
      ))}
    </Switch>
  );
};

export default Routes;
