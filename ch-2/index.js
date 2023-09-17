
/*

// create a folder name it syed
//create a file in it named bio.txt and data into it.

// add more data into the file at the end of the existing data .
//read the data without getting the buffer data at first file encoding 


// rename the file name to mybio.txt
// now delete both  the file and folder


*/


const fs = require('fs');




/*
fs.mkdir('syed', (err, data)=>{
    if(err) console.log(err)
    console.log('done')
})
*/


/*
fs.writeFile('./syed/bio.txt','hey brogrammers' , (err)=>{
    if(err) console.log(err)
    console.log('file created')
})
*/


/*
fs.appendFile('./syed/bio.txt' , '  wassupppp bro' ,(err)=>{
   if(err) console.log(err)

   console.log('appended')
})
*/

/*
fs.readFile('./syed/bio.txt', 'UTF-8', (err, data) => {

    if (err) console.log(err)
    console.log(data)
})
*/


/*
fs.rename('./syed/bio.txt', './syed/mybio.txt' , (err)=>{
if(err)  console.log(err)
console.log('sulta  diya')
})
*/

/*
fs.unlink('./syed/mybio.txt' , (err)=>{
    if(err) console.log(err) ;
})
*/




/*
fs.rmdir('./syed',(err)=>{
    if(err) console.log(err) ;
    
})
*/
