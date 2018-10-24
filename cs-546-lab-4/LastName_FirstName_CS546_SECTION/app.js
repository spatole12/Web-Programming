const todoItems = require("./todo");
const mongoCollections = require("./mongoCollections");
const todoColl = mongoCollections.todoItems;
const connection = require("./mongoConnection");

//should reject 
async function main() {
     const createdTask = await todoItems.createTask("Ponder Dinosaurs", "Has Anyone Really Been Far Even as Decided to Use Even Go Want to do Look More Like?");
    console.log(createdTask);
    const createdTask1 = await todoItems.createTask("Play Pokemon with Twitch TV", "Should we revive Helix?");
    console.log(createdTask1); 
 
     let getTasks = await todoItems.getAllTasks();
    console.log(JSON.stringify(getTasks));
 
 
     const removeTask = await todoItems.removeTask();
    console.log(removeTask);
    try {
        return await todoItems.getTask(createdTask.insertedId);
    } catch (error) {
      console.error("The task was removed!!!   "+error);
   } 
 
     getTasks = await todoItems.getAllTasks();
    console.log(JSON.stringify(getTasks));
 
    const task =  await todoItems.getTask(createdTask1.insertedId);
    const finishedTask = await todoItems.completeTask(task._id); 
    console.log(finishedTask);
   
   const db = await connection();
   await db.serverConfig.close();
   //process.exit()
 
   console.log("Done!");
}

main().catch(error => {
    console.log(error);
  });