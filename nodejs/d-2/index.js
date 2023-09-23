const qr = require('qrcode');

const data={
    name:'anwar',
    pass:'123'
}

  const jdata = JSON.stringify(data) ;
qr.toFile('./qr.png', jdata, (error)=>{
    if(error) console.log(error)
    console.log("done")
})