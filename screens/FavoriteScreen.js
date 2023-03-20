import { useContext } from "react";
import { useSelector } from "react-redux";
import MealsList from "../components/MealsList";
import { MEALS } from "../data/dummy-data";
import { FavoriteContext } from "../store/context/favorite-context";

function FavoriteScreen({navigation}){


     //  const favoriteMealCtx = useContext(FavoriteContext);
     const favoriteMealIds = useSelector( state => state.favoriteMeals.ids )
      const favoriteMeals = MEALS.filter( (meal) => 
      favoriteMealIds.includes(meal.id));

 return (
      <MealsList Meals={favoriteMeals} navigation={navigation} />
 );
}
export default FavoriteScreen;