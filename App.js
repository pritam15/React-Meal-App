import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsDetails from "./screens/MealsDetails";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import "react-native-gesture-handler";
import FavoriteScreen from "./screens/FavoriteScreen";
import { Ionicons } from "@expo/vector-icons";
import FavoriteContextProvide from "./store/context/favorite-context";
import { Provider } from "react-redux";
import store from "./store/redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle: { backgroundColor: "#3f2f25" },
        drawerActiveTintColor: "#472714",
        drawerActiveBackgroundColor: "#e59f76",
        drawerInactiveTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="favorite"
        component={FavoriteScreen}
        options={{
          title: "Favorites",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="heart" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
      {/* <FavoriteContextProvide> */}
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#3f2f25" },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Meals Overview"
              component={MealsOverviewScreen}
              // options={ ({route , navigation}) => {
              //   const CategoryID = route.params.categoryId;
              //   const categoryTitle = CATEGORIES.find( (category) => {
              //      return(
              //       category.id === CategoryID
              //      )
              //   } ).title
              //   return {title : categoryTitle};
              // }}
            />

            <Stack.Screen
              name="MealDetails"
              component={MealsDetails}
              options={{ title: "Meal Details" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      {/* </FavoriteContextProvide> */}
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
