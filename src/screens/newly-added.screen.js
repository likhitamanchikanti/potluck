import { FilterComponent } from "../components/filter.component";
import { HeaderComponent } from "../components/header.component";
import React from "react";
import { RecipeListComponent } from "../components/recipe-list.component";
import { ScrollView } from "react-native-web";
import { View } from "react-native";
import axios from 'axios';
import {homeScreenStyles as styles} from '../styles/home.screen.styles';
import { useEffect } from "react";
import { useState } from "react";

export const NewlyAddedScreen = ({ navigation }) => {
  const [recipes, setRecipes] = useState([]);
  const [minCook, setMinCook] = useState();
  const [maxCook, setMaxCook] = useState();

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = () => {
    axios.get('http://localhost:8080/')
    .then(res => {
      console.log(res)
      setRecipes(res.data);
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <ScrollView>
      <HeaderComponent/>
      <View style={{padding: '30px'}}/>
      <View style={styles.container}> 
        <View style={{flexDirection: 'column'}}>
          {!maxCook && !minCook? (
            <View style={{flexDirection: 'column'}}>
              {recipes.map((recipe) => (
                <RecipeListComponent recipe={recipe} navigation={navigation} key={recipe.RecipeTitle}/>
              ))}
            </View>
          ) : !maxCook? (
            <View style={{flexDirection: 'column'}}>
              {recipes.filter((r) => (Number(r.CookTime) + Number(r.PrepTime)) >= minCook)
              .map(({UserID, RecipeTitle, RecipeDescription, PrepTime, CookTime, Diet, Image, Ingredients, Steps, NumLikes,Liked}) => ({UserID, RecipeTitle, RecipeDescription, PrepTime, CookTime, Diet, Image, Ingredients, Steps, NumLikes,Liked}))
              .map((recipe) => (
                <RecipeListComponent recipe={recipe} navigation={navigation} key={recipe.RecipeTitle}/>
              ))}
            </View>
          ) : !minCook? (
            <View style={{flexDirection: 'column'}}>
              {recipes.filter((r) => (Number(r.CookTime) + Number(r.PrepTime)) <= maxCook)
              .map(({UserID, RecipeTitle, RecipeDescription, PrepTime, CookTime, Diet, Image, Ingredients, Steps, NumLikes,Liked}) => ({UserID, RecipeTitle, RecipeDescription, PrepTime, CookTime, Diet, Image, Ingredients, Steps, NumLikes,Liked}))
              .map((recipe) => (
                <RecipeListComponent recipe={recipe} navigation={navigation} key={recipe.RecipeTitle}/>
              ))}
            </View>
          ) : (
            <View style={{flexDirection: 'column'}}>
              {recipes.filter((r) => (Number(r.CookTime) + Number(r.PrepTime)) >= minCook && (Number(r.CookTime) + Number(r.PrepTime)) <= maxCook)
              .map(({UserID, RecipeTitle, RecipeDescription, PrepTime, CookTime, Diet, Image, Ingredients, Steps, NumLikes,Liked}) => ({UserID, RecipeTitle, RecipeDescription, PrepTime, CookTime, Diet, Image, Ingredients, Steps, NumLikes,Liked}))
              .map((recipe) => (
                <RecipeListComponent recipe={recipe} navigation={navigation} key={recipe.RecipeTitle}/>
              ))}
            </View>
          )}
        </View> 

        <View style={{paddingLeft: 50}}/>

        <FilterComponent
          minCook={minCook}
          setMinCook={setMinCook}
          maxCook={maxCook}
          setMaxCook={setMaxCook}
        />
      </View>
    </ScrollView>
  );
};