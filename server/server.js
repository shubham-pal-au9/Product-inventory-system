const express = require('express');
const app = express();
const port = process.env.PORT || 9700;
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient
const bodyParser = require('body-parser');
const cors = require('cors');
const mongourl = `mongodb://localhost:27017`;
let dbobj;
let col_name="TV"


//middleware
//cross origin resource sharing
app.use(cors())

//parse data for post call
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

//health Check

app.get('/',(req,res) => {
    res.status(200).send("Health Ok")
})


//postUser
app.post('/addProducts',(req,res)=>{
    dbobj.collection(col_name).insert(req.body,(err,result) => {
        if(err) throw err;
        res.status(200).send("Data Added")
    })
});


//getUser
app.get('/allProducts',(req,res) => {
    dbobj.collection(col_name).find().toArray((err,result) => {
        if(err) throw err;
        res.send(result)
    })
})


//updateUser
app.put('/updateProducts/:_id',(req,res) => {
    let Id = req.params._id;
    dbobj.collection(col_name).update(
        {_id:mongo.ObjectID(Id)},
        {
            $set:{
                screeSize:req.body.screeSize,
                os:req.body.os,
                quality: req.body.quality,
                frameRate: req.body.frameRate,
                price:req.body.price,
                images: req.body.images
            }
        },(err,result) => {
            if(err) throw err;
            res.send("Data Updated")
        }
    )
})

//DeleteUser
app.delete('/deleteProduct/:_id',(req,res) => {
    let Id = mongo.ObjectID(req.params._id);
    dbobj.collection(col_name).remove({_id:Id},(err,result) => {
        if(err) throw err;
        res.send("Data Deleted")
    })
});


//connecting database to nodejs
MongoClient.connect(mongourl,(err,connection) => {
    if(err) console.log(err);
    dbobj = connection.db('products');
    app.listen(port,(err) => {
        console.log(`Server is running on port ${port}`)
    })
})