import {
	TodosContainer,
	Title,
	List,
	ItemBox,
	Item,
	DetailsButton,
} from './TodosList.styles';

import Loading from '../UI/Loading';
import Error from '../UI/Error';
import { Box } from '@mui/system';

const TodosList = ({ value }: any) => {
	const { data, isError, isFetching } = value;

	return (
		<TodosContainer data-testid='todoslist-component'>
			{isFetching && <Loading />}
			{isError && <Error>{'Could not fetch data! 🔥'}</Error>}

			{!isError && !isFetching && (
				<Box>
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
				</Box>
			)}
		</TodosContainer>
	);
};

export default TodosList;
