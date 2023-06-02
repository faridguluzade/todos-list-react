import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Todos from '../pages/Todos';
import TodosDetail from '../pages/TodosDetail';

const router = createBrowserRouter([
	{
		path: '/',
		children: [
			{
				index: true,
				element: <Todos />,
			},
			{
				path: ':id',
				element: <TodosDetail />,
			},
		],
	},
]);

const Root = () => {
	return <RouterProvider router={router} />;
};

export default Root;
