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
  const { data, isError, isFetching } = value;

  return (
    <TodosContainer>
      {isFetching && <Loading />}
      {isError && <Error>{"Could not fetch data! 🔥"}</Error>}

      {!isError && !isFetching && (
        <>
          <Title>All Todos List</Title>
          <List>
            {data.map((item: any, index: number) => (
              <ItemBox key={item.id}>
                <Item>
                  {index + 1}. {item.title}
                </Item>
                <DetailsButton to={`${item.id}`}>Details</DetailsButton>
              </ItemBox>
            ))}
          </List>
        </>
      )}
    </TodosContainer>
  );
};

export default TodosList;
