import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';

const router = () => {
	const FavoritePage = lazy(() => import('./views/FavoritePage'));
	const IndexPage = lazy(() => import('./views/IndexPage'));
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route
						path='/'
						element={
							<Suspense fallback='Cargando...'>
								<IndexPage />
							</Suspense>
						}
						index
					/>
					<Route
						path='/favoritos'
						element={
							<Suspense fallback='Cargando...'>
								<FavoritePage />
							</Suspense>
						}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
export default router;
