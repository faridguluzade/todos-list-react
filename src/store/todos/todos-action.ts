import { setTodos, setIsLoading, setHttpError } from "./todos-slice";
import { AppDispatch } from "../store";

export const fetchTodosData = (): any => {
  return async (dispatch: AppDispatch) => {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");

      if (!res.ok) throw new Error("🤢 Could not fetch data!");

      const data = await res.json();

      dispatch(setTodos(data));
    } catch (error: any) {
      dispatch(setHttpError(error.message));
    } finally {
      dispatch(setIsLoading(false));
    }
  };
};
