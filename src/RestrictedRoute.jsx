import { Navigate } from "react-router-dom";

export const RestrictedRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = true; // поки ручний вид, поки редаксу не буде

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
