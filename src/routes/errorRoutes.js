import NotFoundPage from '../pages/404';

const errorRoutes = [
	{
		path: '*',
		component: NotFoundPage,
	},
];

export default errorRoutes;
