import { useLocation } from "react-router-dom";
import TodosItem from "../components/TodosItem";

const TodosDetail = () => {
  const { state } = useLocation();

  return <TodosItem todo={state} />;
};

export default TodosDetail;
