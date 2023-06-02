import { TodoItemContainer, ButtonBack, DetailsBox } from './TodosItem.styles';
import { Text } from './TodosItem.styles';

const TodosItem = ({ todo }: any) => {
	const { id, title, completed } = todo;

	return (
		<TodoItemContainer data-testid='todositem-component'>
			<ButtonBack to='..'>Go Back</ButtonBack>
			<DetailsBox>
				<Text variant='h5'>ID: {id}</Text>
				<Text variant='h4'>Title: {title}</Text>
				<Text variant='h5'>Completed: {completed.toString()}</Text>
			</DetailsBox>
		</TodoItemContainer>
	);
};

export default TodosItem;
