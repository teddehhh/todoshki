import { Header } from "../../../../widgets/header/header";
import { Sidebar } from "../../../../widgets/sidebar/ui/sidebar/sidebar";
import styles from "./todos-layout.module.css";
import type { PropsWithChildren } from "react";

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
