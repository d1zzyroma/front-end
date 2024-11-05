import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors.js";

export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn); // поки ручний вид, поки редаксу не буде

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
