import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as queries from '../store/api/todosApi';

import Todos from './Todos';

describe('Todos Component', () => {
	test('should render \'TodosList\' component the fetch status', () => {
		jest.spyOn(queries, 'useGetAllTodosQuery').mockImplementation((): any => ({
			data: [] as any,
			isError: false,
			isFetching: false,
			refetch: jest.fn(),
		}));

		render(<Todos />);

		const todosListComponent = screen.getByTestId('todoslist-component');
		expect(todosListComponent).toBeInTheDocument();
	});
});
