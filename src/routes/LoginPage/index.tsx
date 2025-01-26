import React, { lazy, Suspense } from 'react';
import { ActionFunctionArgs, Form } from 'react-router';

const LazyLoginPage = lazy(() =>
	import('./LoginPage').then((module) => ({
		default: module.LoginPage,
	}))
);

const LoginPage = (
	props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => {
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<LazyLoginPage {...props} formSettings={{
				Tag: Form
			}}
			/>
		</Suspense>
	);
};

async function action({ params, request }: ActionFunctionArgs) {
	const data = await request.formData();
	const payload = Object.fromEntries(data.entries()) as object;
	console.log(payload); // выводятся данные формы, чтобы увидеть, что отправляется с формы.
	return null; // выполняется вызов API
}

export default {
	action,
	element: <LoginPage />,
};
