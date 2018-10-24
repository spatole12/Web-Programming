const express = require("express");
const router = express.Router();

router.get('/', (req,res)=>{
  //  try{
        let data = {
        "name": "Shivani Patole",
        "cwid": "10442077",
        "biography": "I am Shivani Sudam Patole from India.I wish to excel in the field of coding someday.I completed my bachelor degree from Bharati Vidyapeeth College of Engineering from India.Then I carried on to gain work experience for a year.And now I am at Stevens living to my dream to accomplish my master in Computer Science here.",
        "favoriteShows": ["Friends", "The girl in the city", "Little things", "Narcos"],
        "hobbies": ["Sketching", "Painting", "Paper Art"]
      };
      res.json(data);
    //}
   // catch(error){console.log(error)}
    });

    module.exports = router;