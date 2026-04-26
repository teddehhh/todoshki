import { useContext, type PropsWithChildren } from "react";
import { AuthContext } from "../lib/context/auth-context";
import { Navigate } from "react-router";

export function ProtectedRoute(props: PropsWithChildren) {
  const { children } = props;

  const { isLoading, isLoggedIn } = useContext(AuthContext);

  if (isLoading) {
    return <div>ЗАГРУЗКА...</div>;
  }

  if (!isLoggedIn) {
    return <Navigate to={"/"} />;
  }

  return children;
}
