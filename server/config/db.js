const mongoose = require('mongoose');
const dotenv = require('dotenv')
dotenv.config();

async function dbConnect() {
  try {
    const mydb = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true
    });
    //   mydb.once('open', function(err, resp){
    //       console.log('mongo is connected');
    //     });
    console.log('mongo db is connected')

  

    mongoose.connection.on('connected', function () {//connected
      console.log('Mongoose is connected');
    });

    mongoose.connection.on('disconnected', function () {//disconnected
      console.log("Mongoose is disconnected");
      process.exit(1);
    });
    mongoose.connection.on('error', function (err) {//any error
    console.log("Mongoose connection error", err);
    process.exit(1);
});
  }
  catch (e) {
    console.log(e)

  }
}
module.exports = dbConnect

