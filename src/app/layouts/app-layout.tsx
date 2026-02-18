import { Outlet } from "react-router";
import { Cookies } from "../../widgets/cookies/cookies";

export function AppLayout() {
  return (
    <>
      <Outlet />
      <Cookies />
    </>
  );
}
