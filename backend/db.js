const mongoose = require("mongoose");



const mongoURI =
  "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&ssl=false";
// const mongoURI = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
const connectToMongo = () => {
  mongoose.connect(mongoURI, {useNewUrlParser: true}, () => {
    console.log("Connected to Mongo successfully");
  });
};
// New way to run the code using async await
// const connectToMongo = async ()=>{
//   mongoose.connect(mongoURI, await console.log("connected to mongo successfully")
//   )
// }

module.exports = connectToMongo;

// #cwh46
// const mongoose = require('mongoose');

// const mongoURI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
// const mongoURI = "mongodb://localhost:27017/inotebook?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"

// const connectToMongo = ()=>{
//     mongoose.connect(mongoURI, ()=>{
//         console.log("Connected to Mongo Successfully");
//     })
// }
// module.exports = connectToMongo;
