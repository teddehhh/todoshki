import { useContext } from "react";
import styles from "./header.module.css";
import { ThemeContext } from "@/shared/lib";
import { APPEARANCES, FONTS } from "@/shared/types";

export function Header() {
  const theme = useContext(ThemeContext);

  return (
    <header className={styles.wrapper}>
      <div className={styles.header}>
        <div>ТУДУШКИ</div>
        <div>
          <input
            type="checkbox"
            onChange={(e) => {
              theme?.setTheme({
                appearance: e.target.checked
                  ? APPEARANCES.dark
                  : APPEARANCES.light,
                font: e.target.checked ? FONTS.sansSerif : FONTS.geologica,
              });
            }}
          />
        </div>
      </div>
      <div>
        <div>Дмитрий</div>
      </div>
    </header>
  );
}
