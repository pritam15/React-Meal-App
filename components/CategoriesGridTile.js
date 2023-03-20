import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

function CategoriesGridTile({ title, color, onClick }) {
  return (
    <View style = {styles.gridContainer}>
      <Pressable android_ripple={{color : '#ccc'}} 
      style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}
      onPress={onClick}>
        <View style={[styles.innerContainer, {backgroundColor:color}]}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}
export default CategoriesGridTile;

const styles = StyleSheet.create({
      gridContainer:{
            margin:16,
            flex:1,
            height:150,
            borderRadius:8,
            elevation:4,
            backgroundColor:'white',
            shadowColor:'black',
            shadowOffset:{width : 3, height : 3},
            shadowRadius:8,
            shadowOpacity:0.25,
            overflow: Platform.OS === 'android' ? 'hidden' : "visible"
      },
      button:{
            flex:1
      },
      innerContainer:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            borderRadius:8
      },
      text:{
            fontWeight:'bold',
            fontSize:18
      },
      buttonPressed:{
            opacity:0.25
      }

});
