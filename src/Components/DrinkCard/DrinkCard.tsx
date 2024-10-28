import type { Drink } from '../../types';
import { useAppStore } from '../../stores/useAppStore';
type DrinkCardProps = {
	drink: Drink;
};
const DrinkCard = ({ drink }: DrinkCardProps) => {
	const selectRecipe = useAppStore((state) => state.selectRecipe);

	return (
		<div className='border shadow-lg rounded-lg'>
			<div className='overflow-hidden'>
				<img
					src={drink.strDrinkThumb}
					alt={drink.strDrink}
					className='hover:scale-125 hover:rotate-2 duration-700'
				/>
			</div>
			<div className='p-5'>
				<h2 className='text-2xl truncate font-black'>
					{drink.strDrink}
				</h2>
				<button
					type='button'
					className='bg-orange-500 text-white p-3 w-full uppercase hover:bg-orange-600 duration-700 rounded-xl font-bold mt-5 text-lg'
					onClick={() => selectRecipe(drink.idDrink)}>
					Ver receta
				</button>
			</div>
		</div>
	);
};

export default DrinkCard;
