const fs = require('fs') ;

// ==to create a file and add some data==//
// fs.writeFileSync('readme.md','some text') ;

//== to append some data==//

// fs.appendFileSync('readme.md' , 'eat->sleep->code->repeat  this is the life cycle of a developer :) ')



//==To read the file data==//

//  const data =  fs.readFileSync('readme.md') ;
//     console.log(data.toString())

//==to rename  the file==//
fs.renameSync('readme.md', 'readmee.md');