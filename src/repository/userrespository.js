import React from "react";
import { javascript } from "webpack";
import user from "../objects/user";

const userList = []; 

// const myuser = {"userName" : "user1" , "userRecipes": null, "userFavorites": null };

// const myJson = {"recipeTitle": "recipe1", "recipeDescription": "this is description", "prepTime": "20", "cookTime": "30", "ingredients": "apples, oranges", "steps":"the steps", "diet": "lol"};

// const myJson2 = {"recipeTitle": "recipe2", "recipeDescription": "this is description", "prepTime": "20", "cookTime": "30", "ingredients": "apples, oranges", "steps":"kys", "diet": "lol2"};

function saveUser(obj){
    const temprecipe = []; 
    const tempfav = []; 
    const newUser = new user(obj.userName, temprecipe, tempfav);
    userList.push(newUser); 
}

function saveUserRecipe(username, recobj){
    userList.find(user => user.userName === username).userRecipes.push(recobj);
}

function saveUserFavorites(username, favobj){
    userList.find(user => user.userName === username).userFavorites.push(favobj);
}

function getUsers(){
 return userList;    
}

function findUser(username){
    const found = userList.find(user=> user.userName === username);
    return found;
}

function deleteUser(username){
    userList.pop(userList.find(user => user.userName === username));
}

function deleteUserRecipe(username, recname){
    const curruser =userList.find(user=> user.userName === username);
    curruser.userRecipes.pop(recipe => recipe.recipeTitle === recname);
    
}

function deleteUserFavorites(username, favname){
     const curruser =userList.find(user=> user.userName === username);
     curruser.userFavorites.pop(recipe => recipe.recipeTitle === recname);
}