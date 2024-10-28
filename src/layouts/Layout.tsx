import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Modal from '../Components/Modal/Modal';

const Layout = () => {
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
