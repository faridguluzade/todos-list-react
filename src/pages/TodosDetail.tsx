import { useLocation } from "react-router-dom";
import TodosItem from "../components/TodosItem/TodosItem";

const TodosDetail = () => {
  const { state } = useLocation();

  console.log(state);

  return <TodosItem todo={state} />;
};

export default TodosDetail;
