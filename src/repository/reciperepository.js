import React from "react";
import { javascript } from "webpack";
import recipe from '../objects/recipe'

const recipeList = [];
// const myJson = {"recipeTitle": "recipe1", "recipeDescription": "this is description", "prepTime": "20", "cookTime": "30", "ingredients": "apples, oranges", "steps":"kys", "diet": "lol"};

function saveRecipe(obj){
        const newRecipe = new recipe(obj.recipeTitle, obj.recipeDescription, obj.prepTime, obj.cookTime, obj.ingredients, obj.steps, obj.diet);
        recipeList.push(newRecipe);
}

function getRecipes(){
        return recipeList;
}

function updateRecipe(updateName, updateField, updateValue){
        const index = recipeList.findIndex(recipe => {recipe.recipeTitle === updateName});
        recipeList[index].updateField = updateValue;
}

function findRecipe(recName){
        const found = recipeList.find(recipe => recipe.recipeTitle == recName);
        return found;
}

function deleteRecipe(recName){
        recipeList.pop(recipeList.find(recipe => recipe.recipeTitle === recName));
}



















// export const saveRecipe = ({ obj }) => {
//         console.log(obj);
//         //var currRecipe = new recipe (obj["recipeTitle"], obj["recipeDescription"], obj["prepTime"], obj["cookTime"], obj["ingredients"], obj["steps"], obj["diet"]);
//         var currRecipe = new recipe(obj.recipeTitle , obj.recipeDescription, obj.prepTime, obj.cookTime, obj.ingredients, obj.steps, obj.diet);
//         recipeList.push(currRecipe);
//         console.log(currRecipe.recipeName);
        
// };

// export const getRecipes = ()=>{
//     return recipeList;
// };

// export const updateRecipe = ({recname, field, value}) =>{
//      var currRecipe = recipeList.find(recipe => recipe.recipeName = recname); 
//      console.log(currRecipe.field);
//      currRecipe.field = value;
//      console.log(currRecipe.field);
// };

// export const deleteRecipe = ({recname}) =>{
//     var currRecipe = recipeList.find(recipe => recipe.recipeName = recname); 
//     recipeList.pop(currRecipe);
// }

// export const findRecipe = ({recname}) => {
//     var currRecipe = recipeList.find(recipe => recipe.recipeName = recname); 
//     return currRecipe; 
// }

saveRecipe(myJson);







