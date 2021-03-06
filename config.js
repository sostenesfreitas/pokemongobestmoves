const mongoose = require('mongoose');
const uriDB = 'mongodb://localhost/be-mean-pokemons';

mongoose.connect(uriDB);
mongoose.connection.on('connected', function(){
console.log("Mongo default connection connected to " + uriDB);
});
 mongoose.connection.on('error', function(err){
  console.log("Mongo default c/onnection error" + err);
  });
  mongoose.connection.on('disconnected', function(){
   console.log("Mongo default connection disconnected");
   });
   mongoose.connection.on('open', function(){
    console.log("Mongo default connection open");
    });
    process.on('SIGINT',function(){
        mongoose.connection.close(function(){
               console.log("The connection is closed");
                       process.exit(0);
                           });
                           });

