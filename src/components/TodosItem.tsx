import styles from "./TodosItem.module.css";
import { Link } from "react-router-dom";

const TodosItem = ({ todo }: any) => {
  const { id, title, completed } = todo;

  return (
    <div className={styles.container}>
      <Link className={styles.btn} to="..">
        Go Back
      </Link>
      <div className={styles["details-box"]}>
        <span>ID: {id}</span>
        <h2>Title: {title}</h2>
        <h3>Completed: {completed.toString()}</h3>
      </div>
    </div>
  );
};

export default TodosItem;
