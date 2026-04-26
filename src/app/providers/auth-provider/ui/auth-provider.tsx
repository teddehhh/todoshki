import { useEffect, useState, type PropsWithChildren } from "react";
import { AuthContext } from "../../../../shared/lib/context/auth-context";

export function AuthProvider(props: PropsWithChildren) {
  const { children } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verifyUser = async () => {
      const response = await fetch("/api/verify");
      setIsLoggedIn(response.ok);
      setIsLoading(false);
      console.log(response.ok);
    };

    verifyUser();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
