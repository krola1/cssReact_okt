import styles from "./Child.module.css";
import GrandChild from "../GrandChild";

console.log(styles);

export default function Child() {
  return (
    <div className="wrapper">
      <div className={styles.polly}>
        <h1>Child</h1>
        <GrandChild />
      </div>
    </div>
  );
}
