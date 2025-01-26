import { createBrowserRouter, RouterProvider, Outlet, Link } from 'react-router';
import { routes as publicRoutes } from '@/routes/routes';
import { AnchorProvider } from './components/Common/Anchor/AnchorProvider';
import { Layout } from './components/Layout/Section/Layout';

function LayoutWrapper() {
	return <AnchorProvider
		LinkElement={({ href, ...props }) => {
			return <Link {...props} to={href as string} />;
		}}
	>
		<Layout>
			<Outlet />
		</Layout>
	</AnchorProvider>
}



const router = createBrowserRouter([
	{
		element: <LayoutWrapper />,
		children: publicRoutes,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;