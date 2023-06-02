import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import TodosList from './TodosList';

describe('TodosList component', () => {
	test('should render Loading component in the fetch status', () => {
		const receviedData: any = {
			data: [],
			isFetching: true,
			isError: false,
		};
		render(<TodosList value={receviedData} />);

		const loadingComponent = screen.getByTestId('loading-component');
		expect(loadingComponent).toBeInTheDocument();
	});

	test('should render Error component in the fetch status', () => {
		const receviedData: any = {
			data: [],
			isFetching: false,
			isError: true,
		};
		render(<TodosList value={receviedData} />);

		const errorComponent = screen.getByTestId('error-component');
		expect(errorComponent).toBeInTheDocument();
	});
});
