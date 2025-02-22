"use client";
import { createContext, useContext } from "react";

const authContext = createContext<{} | undefined>(undefined);
// { user: Doctor | null; refreshSession: () => void } | undefined

const AuthProvider = ({
  children
  // initialUser
}: {
  children: React.ReactNode;
  // initialUser: Doctor | null;
}) => {
  // const [user, setUser] = useState<Doctor | null>(initialUser);
  // const me = useMe({
  //   enabled: !!initialUser
  // });

  // useEffect(() => {
  //   if (me.isSuccess) setUser(me.data.doctor);
  // }, [me.isSuccess]);

  return (
    <authContext.Provider
      value={{}}
      // value={{
      //   user,
      //   refreshSession: me.refetch
      // }}
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
