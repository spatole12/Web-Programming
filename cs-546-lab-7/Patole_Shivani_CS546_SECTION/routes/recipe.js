const express = require("express");
const router = express.Router();
const data = require("../data");
const recipeData = data.recipe;
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: true });

router.get('/',async(req,res)=>{
    try{
    const recipe = await recipeData.getAllRecipe();
    if( recipe == undefined || (!recipe)) { res.json("The recipe is not found !! ")}
    res.json(recipe);
    }
    catch(e)
    {
        res.status(500).json({ error: "Recipe not found" });
    }
});

router.get('/:id',async(req,res)=>{
    try{
    const recipe = await recipeData.getRecipeById(req.params.id);
    if(recipe == undefined || (!recipe)){ res.json("The  recipe is not found !! ")}
    res.json(recipe);
    }
    catch(e)
    {
        res.status(404).json({ error: "Recipe not found" });
    }
});

router.post("/", urlencodedParser,async (req, res) => {
    const blogRecipePostData = req.body;
    if( blogRecipePostData !== null || blogRecipePostData == undefined || (!blogRecipePostData))
    { res.json("The request body is not found !! ")}
    try {
      const { title,ingredients,steps } = blogRecipePostData;
      const newRecipe = await recipeData.addRecipe(title,ingredients,steps);
      if(newRecipe == undefined || (!newRecipe)) { res.json("The new recipe is not found !! ")}
      res.json(newRecipe);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  });

  router.put("/:id", async (req, res) => {
    const updatedData = req.body;
    try {
      await recipeData.getRecipeById(req.params.id);
    } catch (e) {
      res.status(404).json({ error: "Recipe not found" });
    }
    try {
      const updatedRecipe = await recipeData.updateRecipe(req.params.id, updatedData);
      if(updatedRecipe == undefined || (!updatedRecipe)) { res.json("The updated recipe is not found !! ")}
      res.json(updatedRecipe);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  });
  
  
  
  router.delete("/:id", async (req, res) => {
    try {
      await recipeData.getRecipeById(req.params.id);
    } catch (e) {
      res.status(404).json({ error: "Recipe not found" });
    }
    try {
      await recipeData.removeRecipe(req.params.id);
      res.sendStatus(204);
    } catch (e) {
        res.status(500).json({ error: e });
  }
});

router.patch('/:id', async (req, res)=> {
    const updatedData = req.body;
    if(updatedData == undefined || (!updatedData)){ res.json("The recipe is not retrieved !! ")}

    try{
    const id = req.params.id;
    if(id == undefined || (!id)) { res.json("The id is not retrieved !!  ")}
    await recipeData.update_patchRecipe(id,updatedData);
    res.sendStatus(204);
    }
    catch (e) {
        res.status(404).json({ error: "Recipe not found" });
      }

});

module.exports = router;