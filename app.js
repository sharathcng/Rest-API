const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv/config')


app.use(bodyParser.json())

//import routes
const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute)

//Routes
app.get('/', (req, res) => {
    res.send('We are on home')
})




//connect to DB
mongoose.connect(
    process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (res) => {
    console.log("Connected to DB", res)
})

// const client = new MongoClient(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

//Start listening
app.listen(3000)



//middlewares
// app.use('/posts', (req,res)=>{
//     console.log("Middleware running")
// })
