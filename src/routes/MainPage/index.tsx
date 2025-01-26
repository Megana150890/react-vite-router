import React, { lazy, Suspense } from 'react';
import {
	ActionFunctionArgs,
	Form,
	LoaderFunctionArgs,
	useLoaderData,
} from 'react-router';

// Лениво загружаем компонент
const LazyPage = lazy(() =>
	import('./MainPage').then((module) => ({
		default: module.MainPage,
	}))
);

type PageProps = {
	children?: React.ReactNode;
};

const MainPage = ({ children }: PageProps) => {
	const data = useLoaderData<loaderResponse>();
	return (
		<Suspense fallback={<p>Loading...</p>}>
			<LazyPage data={data} formSettings={{ Tag: Form }}></LazyPage>
		</Suspense>
	);
};

async function loader({ params, request }: LoaderFunctionArgs) {
	return Promise.resolve({
		result: 'OK',
	});
}

async function action({ request }: ActionFunctionArgs) {
	const data = await request.formData();
	const payload = Object.fromEntries(data.entries());
	console.log(payload);
	return null;
}

export type loaderResponse = Awaited<ReturnType<typeof loader>>;

export default {
	loader,
	action,
	element: <MainPage />,
};
