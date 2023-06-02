import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import * as queries from '../store/api/todosApi';
import TodosDetail from './TodosDetail';
import { BrowserRouter as Router } from 'react-router-dom';
describe('TodosDetail component', () => {
	test('should render loading element', () => {
		jest.spyOn(queries, 'useGetTodoItemQuery').mockImplementation((): any => ({
			data: [] as any,
			isError: false,
			isFetching: true,
			refetch: jest.fn(),
		}));

		render(<TodosDetail />);

		const loadingComponent = screen.getByTestId('loading-component');
		expect(loadingComponent).toBeInTheDocument();
	});

	test('should render loading element', () => {
		jest.spyOn(queries, 'useGetTodoItemQuery').mockImplementation((): any => ({
			data: [] as any,
			isError: true,
			isFetching: false,
			refetch: jest.fn(),
		}));

		render(<TodosDetail />);

		const errorComponent = screen.getByTestId('error-component');
		expect(errorComponent).toBeInTheDocument();
	});

	test('should render todosItem component', () => {
		jest.spyOn(queries, 'useGetTodoItemQuery').mockImplementation((): any => ({
			data: { id: 1, title: 'delectus aut autem', completed: false },
			isError: false,
			isFetching: false,
			refetch: jest.fn(),
		}));

		render(
			<Router>
				<TodosDetail />
			</Router>
		);

		const todosItemComponent = screen.getByTestId('todositem-component');
		expect(todosItemComponent).toBeInTheDocument();
	});
});
