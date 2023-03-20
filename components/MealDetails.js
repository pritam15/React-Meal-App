import {View , Text, StyleSheet} from 'react-native'
 function MealDetails({duration,complexity,affordability, detailsStyle, textStyle}){
     return( 
     <View style={[styles.details, detailsStyle]}>
      <Text style={[styles.detailsItem,textStyle]}> {duration}m </Text>
      <Text style={[styles.detailsItem,textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailsItem,textStyle]}>
    
        {affordability.toUpperCase()}
      </Text>
    </View>);
}

export default MealDetails;

const styles = StyleSheet.create({
      details: {
            flexDirection: "row",
            padding: 8,
            alignItems: "center",
            justifyContent: "center",
          },
          detailsItem: {
            marginHorizontal: 4,
            fontSize: 12,
          },
});