import { useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
const Header = () => {
	const { pathname } = useLocation();
	const isHome = useMemo(() => pathname === '/', [pathname]);
	return (
		<header
			className={
				isHome ? 'bg-header bg-center bg-cover' : 'bg-slate-800'
			}>
			<div className='mx-auto container px-5 py-16'>
				<div className='flex justify-between items-center'>
					<div>
						<img
							className='w-32'
							src='/logo.svg'
							alt='Logotipo'
						/>
					</div>
					<nav className='flex gap-4'>
						<NavLink
							to='/'
							className={({ isActive }) =>
								isActive
									? 'text-orange-500 uppercase font-bold'
									: 'text-white uppercase font-bold'
							}>
							Inicio
						</NavLink>
						<NavLink
							to='/favoritos'
							className={({ isActive }) =>
								isActive
									? 'text-orange-500 uppercase font-bold'
									: 'text-white uppercase font-bold'
							}>
							Favoritos
						</NavLink>
					</nav>
				</div>
				{isHome && (
					<form className='md:w-1/2 2xl:w-1/3 bg-orange-500 my-4 p-10 rounded-lg shadow-md space-y-6'>
						<div className='space-y-4'>
							<label
								htmlFor='ingredient'
								className='block text-white uppercase font-extrabold text-lg'>
								Nombre o Ingredientes
							</label>
							<input
								type='text'
								placeholder='Nombre o ingrediente. Ej. Vodka, tequila, Café'
								id='ingredient'
								name='ingredient'
								className='p-3 w-full rounded-lg focus:outline-none'
							/>
						</div>
						<div className='space-y-4'>
							<label
								htmlFor='category'
								className='block text-white uppercase font-extrabold text-lg'>
								Categoría
							</label>
							<select
								id='category'
								name='category'
								className='p-3 w-full rounded-lg focus:outline-none'>
								<option value=''>-- Seleccione --</option>
							</select>
						</div>
						<input
							className='cursor-pointer bg-orange-800 hover:bg-orange-900 duration-700 text-white p-2 font-bold rounded-lg w-full uppercase'
							type='submit'
							value='Buscar receta'
						/>
					</form>
				)}
			</div>
		</header>
	);
};

export default Header;
