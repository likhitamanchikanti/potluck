import React from "react";

export class user{
    userRecipes = [];
    userFavorites = [];
    constructor(userName, userRecipes, userFavorites){
        this.userName = userName; 
        this.userRecipes = userRecipes; 
        this.userFavorites = userFavorites;
    }
};