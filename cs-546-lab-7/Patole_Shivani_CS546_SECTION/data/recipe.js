const mongoCollections = require("../config/mongoCollections");
const recipeItem = mongoCollections.recipeItem;
const uuid = require("uuid/v1");

module.exports = {
async getAllRecipe(){
    const recipeCollection = await recipeItem();
    const recipe_array =  await recipeCollection.find({}).toArray();
    if (!recipe_array) throw "Collection is empty";
    let recipe_array_1 = [];
    for(let i = 0; i < recipe_array.length;i++)
    {
        let j = {
            _id : recipe_array[i]._id,
            title  : recipe_array[i].title
        };
       recipe_array_1.push(j); 
    }
    return recipe_array_1;
},

async getRecipeById(id){
    if((!id) || typeof id !=="string")throw "Please provide valid id!";
    const recipeCollection = await recipeItem();
    const recipe1 = await recipeCollection.findOne({ _id: id });
    if (!recipe1) throw "Recipe not found";
    return recipe1;
},

async update_patchRecipe(id,updateObject){
    if((!id) || typeof id !=="string")throw "Please provide valid id!";
    if((!updateObject) || typeof updateObject !=="object")throw "Please provide valid object!";
    const recipeCollection = await recipeItem();
    return await recipeCollection.updateOne({_id  : id}, {$set: updateObject});

},


async removeRecipe(id) {
    if((!id) || typeof id !=="string")throw "Please provide valid id!";
    const recipeCollection = await recipeItem();
    const deletionInfo = await recipeCollection.removeOne({ _id: id });
    if (deletionInfo.deletedCount === 0) {
      throw `Could not delete recipe with id of ${id}`;
    }
},

async updateRecipe(id, updatedData) {
    const recipeCollection = await recipeItem();
    if((!id) || typeof id !=="string")throw "Please provide valid id!";
    if((!updatedData) || typeof updatedData !=="object")throw "Please provide valid object!";
    const updatedRecipeData = {};
    if (updatedData.ingredients) {
        updatedRecipeData.ingredients = updatedData.ingredients;
    }
    if (updatedData.title) {
        updatedRecipeData.title = updatedData.title;
    }
    if (updatedData.steps) {
        updatedRecipeData.steps = updatedData.steps;
    }

    await recipeCollection.updateOne({_id: id }, { $set: updatedRecipeData});
    return await this.getRecipeById(id);
  },

  async addRecipe(recipe_title, ingredients1,steps1) {
    if(!recipe_title)throw "Please provide valid recipe_title!";
    if(!ingredients1)throw "Please provide valid ingredients1!";
    if(!steps1)throw "Please provide valid steps1!";
    if (typeof recipe_title !== "string") throw "Title is not a string!";
    if (!Array.isArray(ingredients1)) {
        ingredients1 = [];
      }
    if (!Array.isArray(steps1)) {
        steps = [];
      }
    const newRecipe = { 
        _id: uuid(),
        title: recipe_title,
        ingredients: ingredients1,
        steps: steps1
      }
    const recipeCollection = await recipeItem();
    const newInsertInformation = await recipeCollection.insertOne(newRecipe);
    const newId = newInsertInformation.insertedId;
    if(!newId)throw "The newId is not present!";
    return await this.getRecipeById(newId);
  }
};