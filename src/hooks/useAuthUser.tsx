import { useContext } from "react";
import { AuthProvider } from "@/context/AuthContext";


export function useAuthUser(): Record<string, boolean> {
  //Only for dev mode, it missing many things, for example: upgrading it to supabase
  const { isSessionUser, setIsSessionUser } = useContext(AuthProvider);



  const ISLOGGED = false;

  return {
    isLogged:ISLOGGED
  };
}
