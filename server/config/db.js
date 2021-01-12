const mongoose = require('mongoose');

async function dbConnect(){
    try{
      const mydb = await mongoose.connect('mongodb+srv://faz123:faz123@cluster0.yhego.mongodb.net/PostsApp?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
          });
        //   mydb.once('open', function(err, resp){
        //       console.log('mongo is connected');
        //     });
            console.log('mongo db is connected')
    }
    catch(e){
        console.log(e)

    }
}
module.exports = dbConnect

