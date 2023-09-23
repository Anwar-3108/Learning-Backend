const fs = require('fs') ;



const bioData = {
  name: "anwar",
  age: 22,
  gender: "male",
};


/*
const jsonData = JSON.stringify(bioData);

console.log("json Data", jsonData);

const objData = JSON.parse(jsonData);
console.log("object data", objData);
*/



//1. convert to json
//2. create a new file with the help of file system and add the data into that file
//reade that file
//again convert to js object 
//console the final result 



const jsonData = JSON.stringify(bioData);
/*
step 1&2 Done

fs.writeFile('syed.json', jsonData ,(err)=>{
    if(err) console.log(err);
    console.log('writing file done');
})
*/


// step 3, 4,5 Done
 fs.readFile('syed.json','utf-8',(err , code)=>{
    if(err) console.log(err);
    // console.log(code);
    const objData=JSON.parse(code);
    console.log(objData);
})




