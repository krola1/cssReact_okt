import styles from "./Grid.module.css";

function Grid({ children }) {
  return <div className={styles.wrapper}>{children}</div>;
}

export default Grid;
