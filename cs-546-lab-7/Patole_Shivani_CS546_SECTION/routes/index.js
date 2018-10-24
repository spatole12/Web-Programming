const postRecipe = require("./recipe");

//const userRoutes = require("./users");



const constructorMethod = app => {

  app.use("/recipe", postRecipe);

 // app.use("/users", userRoutes);



  app.use("*", (req, res) => {

    res.sendStatus(404);

  });

};



module.exports = constructorMethod; 