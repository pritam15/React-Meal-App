import { FlatList, StyleSheet, Text, View } from "react-native";
import MealsItem from "./MealsItem";
function MealsList({Meals, navigation}){

      function renderMealItem( itemData ){
            const item = itemData.item;
          
            const itemMealProps = {
                  title:item.title,
                  imageUrl:item.imageUrl,
                  durability:item.duration,
                  affordability:item.affordability,
                  complexity:item.complexity,
            };

            function mealItemClickHandler(id){
                  navigation.navigate('MealDetails',{mealId : id});
             }

            return(
                  <MealsItem {...itemMealProps} onClick={mealItemClickHandler.bind(this,itemData.item.id)} />
            );
      }

      return(
           <View style={styles.rootContainer}>
            <FlatList  data = {Meals} 
            keyExtractor = {Meals.id} 
            renderItem = { renderMealItem} />
           </View>
      );

}

export default MealsList;

const styles = StyleSheet.create({
      rootContainer:{
            flex:1,
            padding:16
      }
});