
import {CATEGORIES, MEALS} from "../data/dummy-data"
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList";

function MealsOverviewScreen({route, navigation}){
      const CategoryID = route.params.categoryId;
     

      useLayoutEffect( () => {
            const categoryTitle = CATEGORIES.find( (category) => category.id === CategoryID).title
            navigation.setOptions({
                  title :  categoryTitle
            });
      } , [CategoryID, navigation]); 

      const MealList = MEALS.filter( (mealItem) => {
              return mealItem.categoryIds.indexOf(CategoryID) >= 0;    
      } )

     return <MealsList Meals={MealList} navigation={navigation}/> 

     
}
export default MealsOverviewScreen;

