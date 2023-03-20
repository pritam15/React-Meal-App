import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import MealDetails from "./MealDetails"
function MealsItem({ title, imageUrl, durability, complexity, affordability, onClick }) {
  return (
    <View style={styles.rootContainer}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [pressed ? styles.onPressed : null]}
        onPress={ onClick }>
        <View>
          <View style={styles.innerContainer}>
            <Image source={{ uri: imageUrl }} style={styles.imageStyle} />
            <Text style={styles.text}> {title} </Text>
          </View>
          <MealDetails duration={durability}
           complexity={complexity}
           affordability={affordability}/>
        </View>
      </Pressable>
    </View>
  );
}
export default MealsItem;

const styles = StyleSheet.create({
  imageStyle: {
    width: "100%",
    height: 200,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    margin: 16,
  },
  rootContainer: {
    flex: 1,
    backgroundColor: "white",
    borderRadius: 8,
    margin: 16,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    overflow: Platform.OS === 'ios' ? 'visible' : 'hidden'
  },
  innerContainer:{
    borderRadius:8,
    overflow:'hidden'
  },

  onPressed: {
    opacity: 0.5,
  },
});
