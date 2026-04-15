import { useContext } from "react";
import AuthContext from "../context/AuthContext";

function useAuth() {
  const authContext = useContext(AuthContext);

  return { user: authContext.user, loginUser: authContext.loginUser };
}

export default useAuth;
