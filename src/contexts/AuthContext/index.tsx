"use client";
import { deleteCookie } from "cookies-next/client";
import { createContext, useContext } from "react";
import { COOKIE_SESSION_NAME } from "src/consts/cookies";

// import { useGetMe } from "src/services/auth/useGetMe";
// import type { User } from "src/types/api/user";

const sessionContext = createContext<
  | {
    // user: User | null;
    // isLoading: boolean;
    // isAuth: boolean;
    // logout: () => void;
    // refresh: () => void;
  }
  | undefined
>(undefined);

const SessionProvider = ({ children }: { children: React.ReactNode }) => {
  // const me = useGetMe();

  const logout = () => {
    deleteCookie(COOKIE_SESSION_NAME);
    // window.location.href = routes.login();
  };

  return (
    <sessionContext.Provider
      value={{
        // user: me.data?.user ?? null,
        // isLoading: me.isLoading,
        // isAuth: me.isSuccess,
        // logout,
        // refresh: me.refetch,
      }}
    >
      {children}
    </sessionContext.Provider>
  );
};

export const useSession = () => {
  const context = useContext(sessionContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

export default SessionProvider;
