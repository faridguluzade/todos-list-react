import { useParams } from "react-router-dom";
import { useGetTodoItemQuery } from "../services/todosApi";
import TodosItem from "../components/TodosItem/TodosItem";

import Loading from "../components/UI/Loading";
import Error from "../components/UI/Error";

const TodosDetail = () => {
  const { id } = useParams();
  const { data, isError, isLoading } = useGetTodoItemQuery(id);

  return (
    <>
      {isLoading && <Loading />}
      {isError && <Error>{"Could not fetch data! 🔥"}</Error>}

      {!isLoading && !isError && <TodosItem todo={data} />}
    </>
  );
};

export default TodosDetail;
