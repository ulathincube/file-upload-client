import { createContext } from "react";

const AuthContext = createContext({ user: null, loginUser: null });

export default AuthContext;
