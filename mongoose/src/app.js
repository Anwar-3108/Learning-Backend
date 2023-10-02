const mongoose=require('mongoose') ;

mongoose.connect(`mongodb://localhost:27017/anwarr`).then(()=>console.log('connected...✅')).catch((err)=>console.log('error ❌',err));
const myData=  new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    ctype:String,
    city:String,
    age: Number,
    gender:String
});


const myModel=mongoose.model('myModel',myData);

const createDocs=async ()=>{
try {
    const recentLearning= new myModel({
        name: 'anwar',
        ctype: 'Student',
        city: 'Delhi',
        age: 22,
        gender: 'Male'
    })
    const result = await recentLearning.save();
    console.log(result)
} catch (error) {
    console.log(error)
}
}

createDocs();