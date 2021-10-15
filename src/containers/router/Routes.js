import React from "react";
import { Redirect, Route, Switch, useLocation } from "react-router";
import { getToken } from "../../common/utils/Authentication";
import Login from "../Login/Login";

const Routes = ({ component: Component, ...rest }) => {
  return (
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
};

export default Routes;
