import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../user_auth_with_FIREBASE/AuthContext";

const PrivateRoute = ({ comp: Component, ...rest }) => {
  const auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (auth.user == null) return <p>Checking authorization access...</p>;
        return auth.user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default PrivateRoute;
