import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import { HeaderComponent } from "../components/header.component";
import React from "react";
import { ScrollView } from "react-native-web";
import { TopLevelOptions } from "@babel/preset-env/lib/options";
import axios from 'axios';
import { color } from '../config/global.styles.config';
import {homeScreenStyles as styles} from '../styles/home.screen.styles';
import { useEffect } from "react";
import { useState } from "react";

export const HomeScreen = ({ navigation }) => {

const [recipes, setRecipes] = useState([]);

const [minCook, setMinCook] = useState();
const [maxCook, setMaxCook] = useState();

const [filteredRecipes, setFilteredRecipes] = useState([]);

useEffect(() => {
  getRecipes();
}, []);

const getRecipes = () => {
  axios.get('http://localhost:8080/')
  .then(res => {
    console.log(res)
    setRecipes(res.data);
    setFilteredRecipes(res.data);


  }).catch(err => {
    console.log(err)
  })
}

// const filterRecipes = (minCook, maxCook, diet) => {
//   const newFilteredRecipes = recipes.filter((recipe) => {
//     return Number(recipe.cooktime) >= minCook && Number(recipe.cooktime) <= maxCook;
//   });
//   setFilteredRecipes(newFilteredRecipes);
// }

const filterRecipes = () => {
  const newFilteredRecipes = recipes.filter((recipe) => {
    const cookTime = Number(recipe.cooktime);
    return cookTime >= Number(minCook) && cookTime <= Number(maxCook);
  });
  newFilteredRecipes.forEach(element => {
    console.log(element);
  });
  setFilteredRecipes(newFilteredRecipes);
}

  return (
    <ScrollView>
      <HeaderComponent/>
      <View style={{padding: '30px'}}/>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{flexDirection: 'column'}}>
            {!maxCook && !minCook? (
          <View style={{flexDirection: 'column'}}>
            {recipes.map((recipe) => (
              <div className='card' key={recipe.title}> 
              {/* TODO: placeholder navigation: should navigate to the expanded recipe screen */}
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                  <View style={styles.tileContainer}>
                    <View style={styles.tile}>
                      <Text style={[styles.title, {textAlign: 'left', marginVertical: "0em"}]}>
                        {/* the recipe title should def not be a key, just leaving this as a placeholder */}
                        {recipe.title}{'\n'}
                      </Text>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={{fontWeight: 'bold'}}>
                          Cook Time:{' '}
                        </Text>
                        <Text>
                          {recipe.cooktime}{'\n'}{'\n'}
                        </Text> 
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </div>
            ))}
          </View>
          // <RecipeList feed={recipes}/>
        ) : !maxCook? (
          <View style={{flexDirection: 'column'}}>
            {recipes.filter((r) => Number(r.cooktime) >= minCook).map(({title, cooktime}) => ({title, cooktime})).map((recipe) => (
              <div className='card' key={recipe.title}> 
              {/* TODO: placeholder navigation: should navigate to the expanded recipe screen */}
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                  <View style={styles.tileContainer}>
                    <View style={styles.tile}>
                      <Text style={[styles.title, {textAlign: 'left', marginVertical: "0em"}]}>
                        {/* the recipe title should def not be a key, just leaving this as a placeholder */}
                        {recipe.title}{'\n'}
                      </Text>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={{fontWeight: 'bold'}}>
                          Cook Time:{' '}
                        </Text>
                        <Text>
                          {recipe.cooktime}{'\n'}{'\n'}
                        </Text> 
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </div>
            ))}
          </View>
          // <RecipeList feed={recipes.filter((r) => Number(r.cooktime) >= minCook).map(({title, cooktime}) => ({title, cooktime}))}/>
        ) : !minCook? (
          <View style={{flexDirection: 'column'}}>
            {recipes.filter((r) => Number(r.cooktime) <= maxCook).map(({title, cooktime}) => ({title, cooktime})).map((recipe) => (
              <div className='card' key={recipe.title}> 
              {/* TODO: placeholder navigation: should navigate to the expanded recipe screen */}
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                  <View style={styles.tileContainer}>
                    <View style={styles.tile}>
                      <Text style={[styles.title, {textAlign: 'left', marginVertical: "0em"}]}>
                        {/* the recipe title should def not be a key, just leaving this as a placeholder */}
                        {recipe.title}{'\n'}
                      </Text>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={{fontWeight: 'bold'}}>
                          Cook Time:{' '}
                        </Text>
                        <Text>
                          {recipe.cooktime}{'\n'}{'\n'}
                        </Text> 
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </div>
            ))}
          </View>
          // <RecipeList feed={recipes.filter((r) => Number(r.cooktime) <= maxCook).map(({title, cooktime}) => ({title, cooktime}))}/>
        ) : (
          <View style={{flexDirection: 'column'}}>
            {recipes.filter((r) => Number(r.cooktime) >= minCook && Number(r.cooktime) <= maxCook).map(({title, cooktime}) => ({title, cooktime})).map((recipe) => (
              <div className='card' key={recipe.title}> 
              {/* TODO: placeholder navigation: should navigate to the expanded recipe screen */}
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                  <View style={styles.tileContainer}>
                    <View style={styles.tile}>
                      <Text style={[styles.title, {textAlign: 'left', marginVertical: "0em"}]}>
                        {/* the recipe title should def not be a key, just leaving this as a placeholder */}
                        {recipe.title}{'\n'}
                      </Text>
                      <View style={{flexDirection: 'row'}}>
                        <Text style={{fontWeight: 'bold'}}>
                          Cook Time:{' '}
                        </Text>
                        <Text>
                          {recipe.cooktime}{'\n'}{'\n'}
                        </Text> 
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </div>
            ))}
          </View>
          // <RecipeList feed={recipes.filter((r) => Number(r.cooktime) >= minCook && Number(r.cooktime) <= maxCook).map(({title, cooktime}) => ({title, cooktime}))}/>
        )}

          </View>
        <View style={{paddingLeft: 50}}/>
        <View style={{flexDirection: 'column'}}>
          <Text style={[styles.title, {textAlign: 'left', marginVertical: 0, paddingBottom: 20}]}>Filters</Text>
          <View style={{padding: 10, borderWidth: 1, height: 150, borderColor: color.blue}}>
            <Text style={{fontWeight: 'bold'}}>Time:</Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                  style={styles.input}
                  placeholder="Min."
                  value={minCook}
                  onChangeText={setMinCook}
                  maxLength={4}
              />
              <TextInput
                  style={styles.input}
                  placeholder="Max."
                  value={maxCook}
                  onChangeText={setMaxCook}
                  maxLength={4}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};