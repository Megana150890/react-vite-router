import React, { lazy, Suspense } from 'react';
import { ActionFunctionArgs, Form } from 'react-router';

const LazyRegisterPage = lazy(() =>
	import('./RegisterPage').then((module) => ({
		default: module.RegisterPage,
	}))
);

const RegisterPage = (
	props: JSX.IntrinsicAttributes & { children?: React.ReactNode }
) => {
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<LazyRegisterPage
				{...props}
				formSettings={{
					Tag: Form,
				}}
			/>
		</Suspense>
	);
};

async function action({ params, request }: ActionFunctionArgs) {
	const data = await request.formData();
	const payload = Object.fromEntries(data.entries()) as object;
	console.log(payload); //выводит данные формы в консоль
	return null; // выполняется вызов API
}

export default {
	action,
	element: <RegisterPage />,
};
