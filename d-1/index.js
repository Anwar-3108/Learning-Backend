// console.log('type something...');
// const {product, sum} = require(`./calc`) ;
// console.log('product : ',product(2,3));
// console.log('sum : ',sum(2,3))

// const os= require('os') ; //cjs (custom js)
// console.log(os.cpus().length)

const {sum, product} = require('./calc')

const result1 = sum(1, 2);//3
const result2 = product(1, 2);//2


console.log(result1)
console.log(result2)

