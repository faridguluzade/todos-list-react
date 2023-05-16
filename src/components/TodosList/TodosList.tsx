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

const TodosList = ({ value }: any) => {
  const { data, isError, isLoading } = value;

  return (
    <TodosContainer>
      {isLoading && <Loading />}
      {isError && <Error>{"Could not fetch data! 🔥"}</Error>}

      {!isError && !isLoading && (
        <>
          <Title>All Todos List</Title>
          <List>
            {data.map((item: any, index: number) => (
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
