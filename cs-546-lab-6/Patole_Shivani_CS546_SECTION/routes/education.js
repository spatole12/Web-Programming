const express = require("express");
const router = express.Router();

router.get('/', (req,res)=>{
    try{
    var data2 =  [
        {
            "schoolName": "Stevens Institue of Technology",
            "degree": "Master",
            "favoriteClass": "Web Programming",
            "favoriteMemory": "One of the memorable memory till date at Stevens would be the meet and greet event organised by the ISSS.In the event we had a game in which we were supposed to interact with others in the room and complete  a task list that we were assigned.To my surprise I won a Stevens t-shirt which I was already willing to buy someday."
        },
        {
            "schoolName": "Bharati Vidyapeeth College of Engineering",
            "degree": "Bachelor",
            "favoriteClass": "Database Management System",
            "favoriteMemory": "A memorable memory from my college days would probably be the college fest.I headed a treasure hunt .The entire process from designing it to its execution was really fun.We had fun ,fights,arguments all over ;but then it was a success.The late night plannings would always have a print down my memory lane."
        },
        {
            "schoolName": "St.Xavior's Junior College",
            "degree": "Higher Secondary Education",
            "favoriteClass": "Biology",
            "favoriteMemory": "It was a proxy lecture and it was somewhere midst navratri.We all had arranged the benches in a circle in the classroom.The plan was to play garba and was executed accordingly.We had loads of fun that day and that would probably be one of the memorable days ."
        },
        {
            "schoolName": "St.Joseph's High School",
            "degree": "Secondary Education",
            "favoriteClass": "Science",
            "favoriteMemory": " The most memorable day was the last week of my school.Each student was asked to exhibit one of his talents.Some of them danced ,some sang songs and some performed mimicry.It was great fun."
        }

    ];
        res.json(data2);
}
catch(error){console.log(error)}
    });
   

    module.exports = router;