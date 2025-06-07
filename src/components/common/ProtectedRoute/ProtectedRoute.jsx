import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAuthenticated, redirectPath = "/wallet" }) => {
  if (!isAuthenticated) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
