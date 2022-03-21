const mongoose = require('mongoose');

const mongoURL = 'mongodb+srv://Sunnat:sunnat@cluster0.xcdqp.mongodb.net/test'

mongoose.connect(mongoURL, {
    useNewUrlParser : true
})

 var db =mongoose.connection

 db.on('connected', ()=>{
     console.log('mongodb connected')
 })

 db.on('error', ()=>{
    console.log('mongodb connect error')
 }
 )

 module.exports = mongoose;
