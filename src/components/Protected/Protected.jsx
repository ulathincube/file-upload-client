import { Outlet } from "react-router";
import useAuth from "../../hooks/useAuth";
import { Navigate } from "react-router";

function Protected() {
  const { user } = useAuth();

  // if (!user) return <Navigate to="/login" />;
  return <Outlet />;
}

export default Protected;
