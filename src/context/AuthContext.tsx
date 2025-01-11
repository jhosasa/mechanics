import { createContext, useState } from "react";

export const AuthProvider = createContext<{
  isSessionUser?: boolean;
  setIsSessionUser: React.Dispatch<React.SetStateAction<boolean>>;
  infoUser?: any;
  setInfoUser: React.Dispatch<React.SetStateAction<any>>;
}>({
  isSessionUser: false,
  setIsSessionUser: () => {},
  infoUser: null,
  setInfoUser: () => {},
});

export function AuthContext({ children }: any) {
  const [isSessionUser, setIsSessionUser] = useState<boolean>(false);
  const [infoUser, setInfoUser] = useState<any>(null);
  return (
    <AuthProvider.Provider
      value={{
        isSessionUser,
        setIsSessionUser,
        infoUser,
        setInfoUser,
      }}
    >
      {children}
    </AuthProvider.Provider>
  );
}
