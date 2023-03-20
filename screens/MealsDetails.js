import { useContext, useLayoutEffect } from "react";
import { Image, Text, View, StyleSheet, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import IconButton from "../components/IconButton";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";
import { addFavorite, removeFavorite } from "../store/redux/favorite";
// import { FavoriteContext } from "../store/context/favorite-context";

function MealsDetails({ route, navigation }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  // const favoriteMealCtx = useContext(FavoriteContext);
  const favoriteMealIds = useSelector( (state) => state.favoriteMeals.ids )
  const isFavorite = favoriteMealIds.includes(mealId);

  const dispatch = useDispatch();

  function favoriteButtonClickHandler(){
     if(isFavorite){
      // favoriteMealCtx.removeFavorite(mealId);
      dispatch(removeFavorite({id : mealId}));
     }
     else{
      // favoriteMealCtx.addFavorite(mealId);
      dispatch(addFavorite({id:mealId}));
     }
  }

  useLayoutEffect( () => {
      navigation.setOptions({
            headerRight: () => {
                  return (
                  <IconButton icon={ isFavorite ? 'heart' : 'heart-outline'}
                  color = {'white'}
                  onClick={favoriteButtonClickHandler}/>);
            }
      });
  }, [navigation,favoriteButtonClickHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image
        source={{ uri: selectedMeal.imageUrl }}
        style={styles.imageStyle}
      />
      <Text style={styles.title}> {selectedMeal.title} </Text>

      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.textStyle}
      />

      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}> Ingredients </Text>
      </View>

      <View style={styles.listContainer}>
          {selectedMeal.ingredients.map((ingredients) => (
        <View key={ingredients} style={styles.listItem}>
            <Text  style={styles.listItemText}>
              {ingredients}
            </Text>
        </View>
          ))}
      </View>

      <View style={styles.subTitleContainer}>
        <Text style={styles.subTitle}> Steps </Text>
      </View>
      <View style={styles.listContainer}>
       
          {selectedMeal.steps.map((steps) => (
             <View key={steps}  style={styles.listItem}>
            <Text style={styles.listItemText}>
              {steps}
            </Text>
        </View>
          ))}
      </View>
    </ScrollView>
  );
}
export default MealsDetails;

const styles = StyleSheet.create({
      rootContainer:{
            marginBottom:35,
            flex:1
      },
  imageStyle: {
    width: "100%",
    height: 350,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    margin: 8,
  },
  subTitle: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    color: "#f7c29f",
  },
  subTitleContainer: {
    padding: 16,
    margin: 8,
    borderBottomColor: "#f8c29f",
    borderBottomWidth: 2,
    marginHorizontal: 18,
  },
  listContainer: {
    marginHorizontal: 29,
    alignItems: "center",
    padding: 3,
    justifyContent: "center",
  },
  listItem: {
    padding: 8,
    margin: 6,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "black",
    backgroundColor: "#f8c29f", 
    width: "100%",
    elevation:4,
    shadowColor:'#f8c29f',
    shadowOffset:{width:0, height:2},
    shadowRadius:8,
    shadowOpacity:0.25
  },
  listItemText:{
      fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  textStyle:{
      color:'white',
      fontSize:16,
      fontWeight:'bold'
  }
});
