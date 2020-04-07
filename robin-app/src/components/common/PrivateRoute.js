import React from "react";
import { Route, Redirect } from "react-router-dom";
import userService from "../../services/userService"

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
        userService.isAuthenticate ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);
