import { useParams } from 'react-router-dom';
import { useGetTodoItemQuery } from '../store/api/todosApi';
import TodosItem from '../components/TodosItem/TodosItem';

import Loading from '../components/UI/Loading';
import Error from '../components/UI/Error';

const TodosDetail = () => {
	const { id } = useParams();
	const { data, isError, isFetching } = useGetTodoItemQuery(id);

	return (
		<>
			{isFetching && <Loading data-testid='loading' />}
			{isError && <Error>{'Could not fetch data! 🔥'}</Error>}

			{!isFetching && !isError && <TodosItem todo={data} />}
		</>
	);
};

export default TodosDetail;
