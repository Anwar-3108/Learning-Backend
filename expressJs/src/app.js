const express = require('express') ;
const app=express();
const path = require('path') ;
const port =8000 ;
const staticPath= path.join(__dirname,'../public') ;

app.use(express.static(staticPath))



app.get('/',(req, res)=>{
    res.send('hello from the server') 
})


app.listen(port,()=>{
    console.log(`listening on ${port}`);
})

