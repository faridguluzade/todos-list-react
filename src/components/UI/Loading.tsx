import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

function Loading() {
	return (
		<Box
			sx={{
				position: 'absolute',
				left: '50%',
				top: '50%',
				transform: 'translate(-50%, -50%)',
			}}
			data-testid='loading-component'
		>
			<CircularProgress data-testid='circular-component' color='primary' />
		</Box>
	);
}

export default Loading;
