import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Loading from './Loading';

describe('Loading Component', () => {
	test('should render circular component', () => {
		render(<Loading />);

		const circularElement = screen.getByTestId('circular-component');
		expect(circularElement).toBeInTheDocument();
	});
});
