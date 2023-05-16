import { useGetAllTodosQuery } from "../services/todosApi";

import TodosList from "../components/TodosList/TodosList";

const Todos = () => {
  const { data, isError, isLoading } = useGetAllTodosQuery("todos");

  const value: any = { data, isError, isLoading };

  return <TodosList value={value} />;
};

export default Todos;
