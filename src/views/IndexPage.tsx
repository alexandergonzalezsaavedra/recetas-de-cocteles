import { useMemo } from 'react';
import { useAppStore } from '../stores/useAppStore';
import DrinkCard from '../Components/DrinkCard/DrinkCard';
const IndexPage = () => {
	const drinks = useAppStore((state) => state.drinks);
	const hasDrinks = useMemo(() => drinks.drinks.length > 0, [drinks]);

	return (
		<>
			<h1 className='text-6xl font-extrabold text-center'>Recetas</h1>
			{hasDrinks ? (
				<div className='grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 my-10 gap-10'>
					{drinks.drinks.map((drink) => (
						<DrinkCard
							key={drink.idDrink}
							drink={drink}
						/>
					))}
				</div>
			) : (
				<p className='my-10 text-center text-2xl'>
					Seleccione un ingrediente y una categoría para buscar
					recetas
				</p>
			)}
		</>
	);
};
export default IndexPage;
