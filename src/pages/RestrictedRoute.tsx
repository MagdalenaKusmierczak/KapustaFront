import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/selectors";

type RestrictedRouteProps = {
  component: React.ReactElement;
  redirectTo?: string;
};

export const RestrictedRoute = ({ component: Component, redirectTo = "/" }: RestrictedRouteProps) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};





