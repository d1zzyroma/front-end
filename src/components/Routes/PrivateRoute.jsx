import { Navigate } from "react-router-dom";

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const isLoggedIn = true; // поки ручний вид, поки редаксу не буде

  return isLoggedIn ? Component : <Navigate to={redirectTo} />;
};
