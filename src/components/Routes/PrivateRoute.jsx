import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsLoggedIn } from "../../redux/auth/selectors.js";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn); // поки ручний вид, поки редаксу не буде

  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};
