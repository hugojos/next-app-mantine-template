"use client";
import { createContext, useContext, useEffect, useState } from "react";
import useMe from "src/services/auth/useMe";
import Doctor from "src/types/api/Doctor";

const authContext = createContext<
  { user: Doctor | null; refreshSession: () => void } | undefined
>(undefined);

const AuthProvider = ({
  children,
  initialUser
}: {
  children: React.ReactNode;
  initialUser: Doctor | null;
}) => {
  const [user, setUser] = useState<Doctor | null>(initialUser);
  const me = useMe({
    enabled: !!initialUser
  });

  useEffect(() => {
    if (me.isSuccess) setUser(me.data.doctor);
  }, [me.isSuccess]);

  return (
    <authContext.Provider
      value={{
        user,
        refreshSession: me.refetch
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(authContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

export default AuthProvider;
