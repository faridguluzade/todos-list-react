import { Link } from "react-router-dom";
import styles from "./TodosList.module.css";

const TodosList = ({ value }: any) => {
  const { todos, httpError, isLoading } = value;

  return (
    <div className={styles.todos}>
      {isLoading && <p className={styles.todosIsLoading}>Loading...</p>}
      {httpError && <p className={styles.todosError}>{httpError}</p>}

      {!httpError && !isLoading && (
        <>
          <h2 className={styles.title}>All Todos List</h2>
          <ul className={styles.list}>
            {todos.map((item: any) => (
              <div key={item.id} className={styles["item-box"]}>
                <li className={styles.item}>{item.title}</li>
                <Link to={`${item.id}`} state={item} className={styles.btn}>
                  Details
                </Link>
              </div>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default TodosList;
