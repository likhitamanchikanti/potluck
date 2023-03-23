import { Button, Image, Text, View } from "react-native";
import React, {useState} from "react";

import { HeaderComponent } from "../components/header.component";
import { ScrollView } from "react-native-web";
import {profileScreenStyles as styles} from '../styles/profile.screen.styles';

const profilePicture = require('../assets/mock-profile-picture.jpg');

export const ProfileScreen = ({ navigation }) => {
  const [recipes, setRecipes] = useState([]);
  const [favorites, setFavorites] = useState([]);

  return (
    <ScrollView>
      <HeaderComponent/>
      <View style={styles.app}>
        <View style={{flexDirection: 'row'}}>
          <Image
            source={profilePicture}
            style={styles.profilePicture}
          />
          <View style={{flexDirection: 'column', justifyContent: 'center'}}>
            <Text style={[styles.title, {marginVertical: 0}]}>
              Mohini Banerjee{'\n'}
            </Text>
            <Text style={[styles.text, {marginVertical: 0}]}>
              @ThrowSomeMo
            </Text>
            <Text style={styles.text}>
              Bringing some spice into your life one recipe at a time.{'\n'}
            </Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.title}>Recipes</Text>
            {/** TODO: display recipes by pulling from repository / calling recipe obj */}
            {recipes.map((recipe) => (
              <View>
                <Text>{recipe.recipeName}</Text>
              </View>
            ))}
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.title}>Favorites</Text>
            {/** TODO: display favorites by pulling from repository / calling favorites obj */}
            {favorites.map((favorite) => (
              <View>
                <Text>{favorite.recipeName}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};