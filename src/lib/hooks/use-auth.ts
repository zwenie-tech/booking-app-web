import { useContext } from "react";
import { AuthContext } from "../providers/auth-provider";

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProivder");
  }
  return context;
};

export default useAuth;
