import login from '@/routes/LoginPage/';
import main from '@/routes/MainPage/';
import register from '@/routes/RegisterPage/';

export const routes = [
	{ index: true, ...main },
	{ path: '/register', ...register },
	{ path: '/login', ...login },
];