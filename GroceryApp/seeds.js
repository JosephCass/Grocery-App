const mongoose = require('mongoose')

const Product = require('./models/product')

mongoose.connect('mongodb://localhost:27017/farmStand')
    .then(() => {
        console.log("MONGO CONNECTION OPEN")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR")
        console.log(err)
    })

// const p = new Product({
//     name: 'Ruby Grapefruit',
//     price: 1.99,
//     category: 'fruit',

// })
// p.save()
//     .then(p => {
//         console.log(p);
//     })
//     .catch((e) => {
//         console.log(e);
//     })

// const seedProducts = [
//     {
//         name: 'Orange',
//         price: 2.50,
//         category: 'fruit'
//     },
//     {
//         name: 'Apple',
//         price: 2.00,
//         category: 'fruit'
//     },
//     {
//         name: 'Milk',
//         price: 5.00,
//         category: 'dairy'
//     },
//     {
//         name: 'Carrot',
//         price: 2.50,
//         category: 'vegetable'
//     }
// ]


// Product.insertMany(seedProducts)
//     .then(res => {
//         console.log(res);
//     })
//     .catch(e => {
//         console.log(e);
//     })