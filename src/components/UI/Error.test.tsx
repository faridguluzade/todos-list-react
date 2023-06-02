import { screen, render } from '@testing-library/react';

import Error from './Error';

describe('Error component', () => {
	test('shoud render the given text', () => {
		const expectedValue = 'Something went wrong!';
		render(<Error>{expectedValue}</Error>);

		const outputElement = screen.getByRole('heading', { level: 3 }).textContent;
		expect(outputElement).toEqual(expectedValue);
	});
});
