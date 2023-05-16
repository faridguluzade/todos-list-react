import { useSelector } from "react-redux";

import TodosList from "../components/TodosList/TodosList";
import { selectTodos } from "../store/todos/todos-slice";

const Todos = () => {
  const value = useSelector(selectTodos);

  return <TodosList value={value} />;
};

export default Todos;
