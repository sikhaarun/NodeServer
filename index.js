const express = require('express');
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const db = require('./config/mongo').mongoConnectionString;
// get routes
const users = require('./routers/api/users');
// DB Connection
mongoose.connect(db,{ useNewUrlParser: true })
    .then(() => console.log("database connected"))
    .catch(err => {});
// Initialize app
const app = express();

// mongoose.connect('mongodb://sikharun:sikha12345@cluster0-shard-00-00-rrjkn.mongodb.net:27017,cluster0-shard-00-01-rrjkn.mongodb.net:27017,cluster0-shard-00-02-rrjkn.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true',{useNewUrlParser: true})
//      .then(() => console.log("database connected"))
//      .catch(err =>{} );

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
// Use Routers
app.use('/api/users', users);


 app.listen(port);
    console.log(`app running on port ${port}`);