const qr = require('qrcode') ;


const data = {
    'name':'syed' ,
    'email' :'helloanwar1@gamil.com'
}

const stJson = JSON.stringify(data) ;

qr.toFile('./qr.png', stJson, (error,code)=>{
    if(error) return console.log(error)
    
})