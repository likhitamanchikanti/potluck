import React from "react";

export class recipe{
    constructor(recipeTitle, recipeDescription, prepTime, cookTime, ingredients, steps, diet){
        this.recipeTitle = recipeTitle; 
        this.recipeDescription = recipeDescription; 
        this.prepTime = prepTime; 
        this.cookTime = cookTime; 
        this.ingredients = ingredients; 
        this.steps = steps; 
        this.diet = diet; 
    }
};