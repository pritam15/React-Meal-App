import { configureStore } from "@reduxjs/toolkit";
import favoriteReducer from "./favorite"

export default configureStore({
      reducer:{
            favoriteMeals : favoriteReducer
      }
});