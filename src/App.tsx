import { createTheme, ThemeProvider } from '@mui/material/styles';
import { deepPurple, pink } from '@mui/material/colors';

import Root from './routes/router';

export const theme = createTheme({
	palette: {
		primary: deepPurple,
		secondary: pink,
	},
	typography: {
		fontFamily: 'Quicksand',
		fontWeightLight: 400,
		fontWeightRegular: 500,
		fontWeightMedium: 600,
		fontWeightBold: 700,
	},
});

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<Root />
		</ThemeProvider>
	);
};

export default App;
