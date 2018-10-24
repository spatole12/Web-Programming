const mongoCollections = require("./mongoCollections");
const todoColl = mongoCollections.todoItems;
const uuid = require("uuid/v1");

module.exports = {


async createTask(title1, description1){
    if(!title1){throw `Please provide a title`};
    if(!description1){throw `Please provide a description`};
   let input_obj =  {
        _id: uuid(),
        title: title1,
        description: description1,
        completed: false,
        completedAt: null
    } ;
    let todoCollection = await todoColl();
    let insert_task = await todoCollection.insertOne(input_obj);
    console.log("Task created!!!");
    return insert_task;

},
async getAllTasks(){
    const todoCollection = await todoColl();
    const todo = await todoCollection.find({}).toArray();
    console.log("Got all tasks");
    return todo;
    
},
async getTask(id){
    if(!id){throw `Please provide an id`};
    const todoCollection = await todoColl();
    const todo_get = await todoCollection.findOne({ _id: id });
    if (todo_get === null) throw "No record with that id";

    return todo_get;
},
async completeTask(taskId){
    if(!taskId){throw `Please provide a taskId`};   
    const todoCollection = await todoColl();
    const updated_task = await todoCollection.updateMany({_id:taskId},{$set:{completed : "true",completedAt :new Date()}});
    if (updated_task.modifiedCount === 0) {
        throw "Could not update the task successfully";
      }
    console.log(updated_task);
    console.log("The task has been completed");
    return updated_task;
},
async removeTask(id){
    if(!id){throw `Please provide an id`};
    const todoCollection = await todoColl();
    const deletionInfo = await todoCollection.removeOne({ _id: id });
    console.log ("Sucessfully removed the element");
    if (deletionInfo.deletedCount === 0) {
      throw `Could not delete dog with id of ${id}`;
    }
    return deletionInfo;
}


};
