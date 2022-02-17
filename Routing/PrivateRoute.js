import React from "react";
import { Navigate, Route } from "react-router-dom";
import {fakeAuth} from "./Login";

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={props =>
          fakeAuth.isAuthenticated === true ? (
            <Component {...props} />
          ) : (
            <Navigate
              to={{ pathname: "/login", state: { from: props.location } }}
            />
          )}
      />
    );
  };

  export default PrivateRoute;
  