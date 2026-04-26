import { Header } from "@/widgets/header";
import styles from "./todos-layout.module.css";
import type { PropsWithChildren } from "react";
import { Sidebar } from "@/widgets/sidebar";

export function TodosLayout(props: PropsWithChildren) {
  const { children } = props;

  return (
    <>
      <Header />
      <main className={styles.container}>
        <Sidebar />
        <div className={styles["children-container"]}>{children}</div>
      </main>
    </>
  );
}
