import { useMemo } from 'react';
import { useAppStore } from '../stores/useAppStore';
import DrinkCard from '../Components/DrinkCard/DrinkCard';
const IndexPage = () => {
	const drinks = useAppStore((state) => state.drinks);
	const hasDrinks = useMemo(() => drinks.drinks.length > 0, [drinks]);
	console.log(hasDrinks);
	return (
		<>
			<h1 className='text-6xl font-extrabold text-center'>Recetas</h1>
			{hasDrinks ? (
				<ul className='mt-10'>
					{drinks.drinks.map((drink) => (
						<DrinkCard
							key={drink.idDrink}
							drink={drink}
						/>
					))}
				</ul>
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
