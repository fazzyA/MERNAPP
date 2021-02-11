const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const dbConnect = require('./config/db.js');
var cors = require('cors')
// const session = require("express-session");
// const MongoDBStore = require("connect-mongodb-session")(session);
const userRoute  = require('./routes/api/users.js')
const postRoute =  require('./routes/api/posts.js')
const dotenv = require('dotenv')
dotenv.config();

const app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({limit: '50mb'}));
const MAX_AGE = 1000 * 60 * 60 * 3;

dbConnect();

// const mongostore = new MongoDBStore({
//     uri: process.env.MONGO_URI,
//     collection: "mySessions"
//   });

// app.use(
//     session({
//       name: 'usersession', //name to be put in "key" field in postman etc
//       secret: 'abcd',
//       resave: true,
//       saveUninitialized: false,
//       store: mongostore,
//       cookie: {
//         secure: true
//       }
//     })
//   );

const PORT = process.env.PORT || 4000
///connect to db
///to start app
app.listen(PORT, (req,res)=>{
console.log('server is running at', PORT)
})

///Routes
app.use('/api/users', userRoute)
app.use('/api/posts', postRoute)

