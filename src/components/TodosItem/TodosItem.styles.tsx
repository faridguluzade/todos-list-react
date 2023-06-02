import { styled } from '@mui/system';

import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

export const TodoItemContainer = styled('div')({
	backgroundColor: '#fff',
	borderRadius: '10px',
	margin: '0 2rem',
	boxShadow:
		'rgba(17, 17, 26, 0.1) 0px 8px 24px,\n    rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px',
});

export const ButtonBack = styled(Link)(({ theme }: any) => ({
	fontWeight: theme.typography.fontWeightBold,
	display: 'inline-block',
	textDecoration: 'none',
	fontSize: '1.2rem',
	textTransform: 'uppercase',
	backgroundColor: theme.palette.secondary.dark,
	color: '#fff',
	padding: '8px 16px',
	borderRadius: '100px',
	transition: '0.4s',
	margin: '1.5rem',
	'&:hover': {
		transform: 'scale(1.1)',
	},
}));

export const DetailsBox = styled('div')({
	padding: '6rem',
	display: 'flex',
	flexDirection: 'column',
	gap: '2rem',
});

export const Text = styled(Typography)(({ theme }: any) => ({
	fontFamily: theme.typography.inherit.fontFamily,
	color: '#495057',
	borderBottom: '1px solid #dee2e6',
	paddingBottom: '2rem',
	fontWeight: '600',
}));
