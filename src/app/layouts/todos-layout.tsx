import { Outlet } from "react-router";
import { Header } from "../../widgets/header/header";

export function TodosLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
