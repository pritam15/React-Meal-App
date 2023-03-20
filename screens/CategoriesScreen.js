import { FlatList, SafeAreaView, Text, View } from "react-native";
import CategoriesGridTile from "../components/CategoriesGridTile";
import { CATEGORIES } from "../data/dummy-data";



function CategoriesScreen({navigation}) {
  function renderCategoryItem(itemData) {

    function onClickHandler(){
      navigation.navigate('Meals Overview',{
        categoryId:itemData.item.id
      })
    }

    return (
      <CategoriesGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onClick={onClickHandler}
      />
    );
  }
  return (
    <SafeAreaView>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategoryItem}
        numColumns={2}
      />
    </SafeAreaView>
  );
}

export default CategoriesScreen;
