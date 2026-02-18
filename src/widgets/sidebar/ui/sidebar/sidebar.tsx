import { SidebarItem } from "../sidebar-item/sidebar-item";
import styles from "./sidebar.module.css";

export function Sidebar() {
  return (
    <div className={styles.container}>
      <div>мои пространства</div>
      <SidebarItem />
    </div>
  );
}
