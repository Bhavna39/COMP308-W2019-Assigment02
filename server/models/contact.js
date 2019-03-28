 // contact model

 let mongoose = require('mongoose');

// create a model class with properties
let contactSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number
},
{
    collection: "first"
});

module.exports = mongoose.model('test', contactSchema);