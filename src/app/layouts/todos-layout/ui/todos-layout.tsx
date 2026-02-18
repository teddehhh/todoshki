import { Outlet } from "react-router";
import { Header } from "../../../../widgets/header/header";
import { Sidebar } from "../../../../widgets/sidebar/ui/sidebar/sidebar";
import styles from "./todos-layout.module.css";

export function TodosLayout() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Sidebar />
        <Outlet />
      </main>
    </>
  );
}
