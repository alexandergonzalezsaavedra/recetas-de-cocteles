import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Modal from '../Components/Modal/Modal';
import { useEffect } from 'react';
import { useAppStore } from '../stores/useAppStore';
const Layout = () => {
	const loadFromStorage = useAppStore((state) => state.loadFromStorage);

	useEffect(() => {
		loadFromStorage();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<>
			<Header />
			<main className='container mx-auto py-16'>
				<Outlet />
			</main>
			<Modal />
		</>
	);
};

export default Layout;
