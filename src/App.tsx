import Root from "./routes/router";

import { fetchTodosData } from "./store/todos/todos-action";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodosData());
  }, []);

  return <Root />;
};

export default App;
