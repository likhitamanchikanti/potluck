import { CreateRecipeScreen } from "./src/screens/create-recipe.screen";
import { HomeScreen } from "./src/screens/home.screen";
import { NavigationContainer } from '@react-navigation/native';
import { NewlyAddedScreen } from "./src/screens/newly-added.screen";
import { ProfileScreen } from "./src/screens/profile.screen";
import { QuickEasyScreen } from "./src/screens/quick-easy-screen";
import React from "react";
import { RecipeScreen } from "./src/screens/recipe.screen";
import { VeganScreen } from "./src/screens/vegan-screen";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}/>
        <Stack.Screen name="CreateRecipe" component={CreateRecipeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="RecipeScreen" component={RecipeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="NewlyAdded" component={NewlyAddedScreen} options={{headerShown: false}}/>
        <Stack.Screen name="QuickEasy" component={QuickEasyScreen} options={{headerShown: false}}/>
        <Stack.Screen name="Vegan" component={VeganScreen} options={{headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};