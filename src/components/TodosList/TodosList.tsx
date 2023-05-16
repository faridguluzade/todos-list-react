import { todosState } from "../../store/todos/todos-slice";

import styles from "./TodosList.module.css";
import {
  TodosContainer,
  Title,
  List,
  ItemBox,
  Item,
  DetailsButton,
} from "./TodosList.styles";

import Loading from "../UI/Loading";
import Error from "../UI/Error";

interface Values {
  value: todosState;
}

const TodosList: React.FC<Values> = ({ value }) => {
  const { todos, httpError, isLoading } = value;

  return (
    <TodosContainer>
      {isLoading && <Loading />}
      {httpError && <Error>{httpError}</Error>}

      {!httpError && !isLoading && (
        <>
          <Title>All Todos List</Title>
          <List>
            {todos.map((item: any, index) => (
              <ItemBox key={item.id}>
                <Item>
                  {index + 1}. {item.title}
                </Item>
                <DetailsButton to={`${item.id}`} state={item}>
                  Details
                </DetailsButton>
              </ItemBox>
            ))}
          </List>
        </>
      )}
    </TodosContainer>
  );
};

export default TodosList;
