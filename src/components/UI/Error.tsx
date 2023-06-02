import Box from '@mui/material/Box';

function Error({ children }: any) {
	return (
		<Box
			sx={{
				position: 'absolute',
				left: '50%',
				top: '50%',
				transform: 'translate(-50%, -50%)',
				fontSize: '2rem',
			}}
			data-testid='error-component'
		>
			<h3>{children}</h3>
		</Box>
	);
}

export default Error;
