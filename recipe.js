'use strict';

function addIngredient(recipe,ingredientName,amount){
  recipe[ingredientName] = amount;
  return recipe;
}

function removeIngredient(recipe,ingredientName){
  delete recipe[ingredientName];
  return recipe;
}

function updateIngredient(recipe,ingredientName,newAmount){
  recipe[ingredientName] = newAmount;
  return recipe;
}

function readRecipe(recipe){
  if (Object.keys(recipe).length > 0){
    for (var key in recipe){
      console.log('this recipe calls for ' + recipe[key] + ' of ' + key);
    }
  } else {
    console.log("your recipe is empty");
  }
}
