const textMetrics = require("./textMetrics");
const fileData = require("./fileData");
const bluebird = require("bluebird");
const fs = bluebird.promisifyAll(require("fs"));
let isFile;
let file_exsists;
let fileName = "chapter1";
async function main() {
    if(fileName !== null  && fileName !== "")
    {
    try{
        file_exsists = await fs.accessAsync(`${fileName}.result.json`)
        //console.log(file_exsists);
        isFile=true;
        console.log (isFile);
    }catch(e){
        console.log();
    }

    if (isFile == true) {
        //console.log("If file exists");
        let path = `${fileName}.result.json`;
        let result = await fileData.getFileAsJSON(path).catch(err => {
            console.log(err);
        });
        console.log("The resulting JSON is " + JSON.stringify(result));
    }
    else {
        result =await fileData.getFileAsString(`${fileName}.txt`).catch(err => {
            console.log(err);
        });
        let testMetricResult = await textMetrics.createMetrics(result);
        await fileData.saveJSONToFile(`${fileName}.result.json`, testMetricResult).catch(err => {
            console.log(err);
        });

        let data = await fileData.getFileAsJSON(`${fileName}.result.json`).catch(err => {
            console.log(err);
        });
        //console.log("If file does not exists");
        console.log("The resulting JSON is " + JSON.stringify(data));
    }
    return null;
}
else{
    throw `Please provide path`;
}
}

main().catch(err => {
    console.log(err);
});




