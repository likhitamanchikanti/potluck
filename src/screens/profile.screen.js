import { Image, Text, View } from "react-native";
import React, {useEffect, useState} from "react";

import { HeaderComponent } from "../components/header.component";
import { RecipeListComponent } from "../components/recipe-list.component";
import { ScrollView } from "react-native-web";
import axios from 'axios';
import {profileScreenStyles as styles} from '../styles/profile.screen.styles';

const profilePicture = require('../assets/mock-profile-picture.jpg');

export const ProfileScreen = ({ navigation }) => {
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const name = 'Mohini Banerjee';
  const userID = 'mohinibanerjee';
  const bio = 'Bringing some spice into your life one recipe at a time.';

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
      <View style={styles.app}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Image
            source={profilePicture}
            style={styles.profilePicture}
          />
          <View style={{flexDirection: 'column', justifyContent: 'center'}}>
            <Text style={[styles.title, {marginVertical: 0}]}>
              {name}{'\n'}
            </Text>
            <Text style={[styles.text, {marginVertical: 0}]}>
              @{userID}
            </Text>
            <Text style={styles.text}>
              {bio}{'\n'}
            </Text>
          </View>
        </View>
        
        <View style={{flexDirection: 'row', justifyContent: 'space-between', flex: 1, }}>
          <View style={{flexDirection: 'column', flex: 0.5 }}>
            <Text style={styles.title}>Recipes</Text>
            {recipes.filter((r) => r.UserID == 'mohinibanerjee')
            .map((recipe) => (
              <View style={{justifyContent: 'left'}}>
                <RecipeListComponent recipe={recipe} navigation={navigation} key={recipe.RecipeTitle}/>
              </View>
            ))}
          </View>
          <View style={{flexDirection: 'column', flex: 0.5 }}>
            <Text style={styles.title}>Favorites</Text>
            {recipes.filter((r) => r.Liked > 0)
              .map(({UserID, RecipeTitle, RecipeDescription, PrepTime, CookTime, Diet, Image, Ingredients, Steps, NumLikes,Liked}) => ({UserID, RecipeTitle, RecipeDescription, PrepTime, CookTime, Diet, Image, Ingredients, Steps,NumLikes,Liked}))
              .map((recipe) => (
              <View>
                <RecipeListComponent recipe={recipe} navigation={navigation} key={recipe.RecipeTitle}/>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};