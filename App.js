import { CreateRecipeScreen } from "./src/screens/create-recipe.screen";
import { HomeScreen } from "./src/screens/home.screen";
import { NavigationContainer } from '@react-navigation/native';
import { ProfileScreen } from "./src/screens/profile.screen";
import { TestingScreen } from "./src/screens/testing.screen";
import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}/>
        <Stack.Screen name="CreateRecipe" component={CreateRecipeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Testing" component={TestingScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};