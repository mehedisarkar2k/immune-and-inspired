import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <h3 className="text-red-500 text-3xl text-center mt-10">Loading...</h3>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
