const express = require('express')
const app = express()
const db = require('./db')
const Pizza = require('./models/pizzaModel')

app.use(express.json())
app.get('/', (req, res)=>{
    res.status(200).send('hello')
    console.log('hello from backend')
   
    }
    

)

app.get('/all', (req, res)=>{
    Pizza.find({}, (err, doc)=>{
        if(err) {console.log(err) }
        else res.send(doc)
    })
    
})


const port = process.env.PORT||5000

app.listen(port, ()=>{
    console.log(`server is running on${port}`);
})