const bluebird = require("bluebird");
const fs = bluebird.promisifyAll(require("fs"));

async function getFileAsString(path) {
    if (!path) throw "You must provide a path";
    const filecontent = await fs.readFileAsync(path,"utf-8").catch(err => {
        console.log(err);
    });
    if(!filecontent){throw "There is no content in the file"};
    console.log("Successfully retrieved contents!!");

    return filecontent;
 }
  

async function getFileAsJSON(path){
	if (!path) throw "You must provide a path";
    const filecontent1 =  await fs.readFileAsync(path,"utf-8").catch(err => {
        console.log(err);
    });
    if(!filecontent1){throw "There is no content in the file"};
    if (typeof JSON.parse(filecontent1) == "object") {
        return JSON.parse(filecontent1);
      }
      else {
          throw "It is an invalid JSON";
      }
}



async function saveStringToFile(path, text){
    if (!path) throw "You must provide a path";
    await fs.writeFileAsync(path, text).catch(err => {
        console.log(err);
    });
    
    console.log("File saved!!!");
	return true;
}  


async function saveJSONToFile(path, obj){
    if (!path) throw "You must provide a path";
    let text =  JSON.stringify(obj);
    let str_tobesaved = await saveStringToFile(path, text).catch(err => {
        console.log(err);
    });
    if(!str_tobesaved) throw "There is something wrong with the file saving";
   
	return true;
}



module.exports={getFileAsString,getFileAsJSON,saveStringToFile,saveJSONToFile};





