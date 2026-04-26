import styles from "./cookies.module.css";

export function Cookies() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div className={styles.content__title}>Наш сайт использует куки</div>
        <div className={styles.content__text}>
          чтобы вы испытали лучший опыт от просмотра контента
        </div>
      </div>
      <div className={styles.button}>
        <button>согласен</button>
      </div>
    </div>
  );
}
