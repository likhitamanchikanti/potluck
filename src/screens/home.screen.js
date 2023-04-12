import { Button, Image, StyleSheet, Text, View } from "react-native";
import { HeaderComponent } from "../components/header.component";
import React from "react";
import { ScrollView } from "react-native-web";
import {homeScreenStyles as styles} from '../styles/home.screen.styles';
import { useState } from "react";
import axios from 'axios';
import { useEffect } from "react";


export const HomeScreen = ({ navigation }) => {

const [recipes, setRecipes] = useState([]);

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
      <View style={[styles.app, {paddingVertical: 100}]}>
        <Text style={{fontWeight: "bold", fontSize: "1.25rem",}}>
          Get cooking! Recipes will show up here.
        </Text>
      </View>

      <View style={{flexDirection: 'column'}}>
        {recipes.map((recipe) => (
          // the recipe title should def not be a key, just leaving this as a placeholder
          <div className='card'> 
            <Text>
              UserID: {recipe.UserID}{'\n'}
              Recipe Title: {recipe.RecipeTitle}{'\n'}
              Recipe Description: {recipe.RecipeDescription}{'\n'}
              Prep Time: {recipe.PrepTime}{'\n'}
              Cook Time: {recipe.CookTime}{'\n'}
              Diet: {recipe.Diet}{'\n'}
              Ingredients: {'\n'} {recipe.Ingredients}{'\n'}
              Steps: {'\n'} {recipe.Steps}{'\n'}
              <img src={recipe.Image}></img>{'\n'}
            </Text> 
          </div>
      ))}
    </View>
    </ScrollView>
    
  );
  
};