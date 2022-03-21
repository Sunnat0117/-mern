const mongoose = require('mongoose');

const pizzaSchema = mongoose.Schema({
    name : {
        type : String,
        required : true,
        min : 3
    },

    varients :[],
    price : [],
    category : {
        type : String,
        required : true
    },
    
    image : {
        type : String,
        required : true
    },
    decsription : {
        type : String,
        required : true
    }

}, { timestamps : true})


const pizzaModel = mongoose.model('pizzas', pizzaSchema);

module.exports = pizzaModel;