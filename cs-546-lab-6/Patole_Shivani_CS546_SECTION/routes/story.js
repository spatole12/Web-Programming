const express = require("express");
const router = express.Router();
    
    router.get('/', (req,res)=>{
    try{
    var data1 = {
    "storyTitle": "Story Title",
    "story": "When I was in the junior college ,we had gone to Adlabs Imagica which happens to be an amusement park.There was this rollercoaster there ehich they called the Nitro.It was quite huge but at the same time it was evident that it was going to be fun.But I was so afraid to ride it just looking at its size.After waiting for some time Idecided to give it a try and I really enjoyed it.I would have repended it all way long had I not given it a chance.I think the same is with life.There are many instances where we are so tensed that at one point we feel like let going the opportunity.But by just giving it a try ,that opportunity may turn into wonders that might end up leaving an impression upon your life."
      };
      res.json(data1);
    }
    catch(error){console.log(error)}
    });

    module.exports = router;