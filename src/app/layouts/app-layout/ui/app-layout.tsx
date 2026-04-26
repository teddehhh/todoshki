import { Cookies } from "@/widgets/cookies";
import { Outlet } from "react-router";

export function AppLayout() {
  return (
    <>
      <Outlet />
      <Cookies />
    </>
  );
}
