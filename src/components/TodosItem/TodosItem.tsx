import { TodoItemContainer, ButtonBack, DetailsBox } from "./TodosItem.styles";
import { Text } from "./TodosItem.styles";

interface Item {
  id: number;
  title: string;
  completed: boolean;
}

const TodosItem = ({ todo }: any) => {
  const { id, title, completed } = todo;

  return (
    <TodoItemContainer>
      <ButtonBack to="..">Go Back</ButtonBack>
      <DetailsBox>
        <Text variant="h5">ID: {id}</Text>
        <Text variant="h4">Title: {title}</Text>
        <Text variant="h5">Completed: {completed.toString()}</Text>
      </DetailsBox>
    </TodoItemContainer>
  );
};

export default TodosItem;
