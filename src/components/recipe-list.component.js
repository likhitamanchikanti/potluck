import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { ImageBackground } from "react-native-web";
import React from "react";
import { color } from '../config/global.styles.config';

export const styles = StyleSheet.create({
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  tileContainer: {
    flexDirection: 'row',
    paddingBottom: 50,
    paddingLeft: 50,
    // opacity: 1,
  },
  tile: {
    // backgroundColor: color.lightGreen,
    backgroundColor: 'rgba(0,0,0, 0.30)',
    height: 200,
    width: 700,
    padding: 50,
    justifyContent: 'space-between',
    aspectRatio: 1,
    // opacity: 1,
  },
  backgroundImage: {
    height: 200,
    width: 700,
    justifyContent: 'space-between',
  },
  tileText: {
    color: color.white, 
    textShadowColor: color.black, 
    textShadowOffset: {width: -2, height: 2}, 
    textShadowRadius: 5,
  },
});

export const RecipeListComponent = ({recipe, navigation}) => {
    return (
      <div className='card' key={recipe.RecipeTitle}> 
        <TouchableOpacity onPress={() => navigation.navigate('Testing', {currRecipe: recipe})}>
          <View style={styles.tileContainer}>
            <ImageBackground source={recipe.Image} style={styles.backgroundImage}>
              <View style={styles.tile}>
                <Text style={[styles.tileText, {textAlign: 'left', fontStyle: 'italic'}]}>
                    @{recipe.UserID}
                  </Text>
                <Text style={[styles.tileText, styles.title, {textAlign: 'left', marginVertical: "0em"}]}>
                  {/* the recipe title should def not be a key, just leaving this as a placeholder */}
                  {recipe.RecipeTitle}{'\n'}
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <Text style={[styles.tileText, {fontWeight: 'bold'}]}>
                    Prep Time:{' '}
                  </Text>
                  <Text style={[styles.tileText]}>
                    {recipe.PrepTime}{'       '}
                  </Text> 
                  <Text style={[styles.tileText, {fontWeight: 'bold'}]}>
                    Cook Time:{' '}
                  </Text>
                  <Text style={[styles.tileText]}>
                    {recipe.CookTime}{'\n'}{'\n'}
                  </Text> 
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'flex-start'}}>
                  <View style={{borderWidth: 3, borderColor: color.white, padding: 5}}>
                    <Text style={[styles.tileText]}>{recipe.Diet}</Text>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </div>
    );
  }