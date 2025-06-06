const mongoose = require("mongoose");
// const mongoURI = "mongodb://localhost:27017/inotebook";
const mongoURI =
  "mongodb+srv://ayushkumbhalkar68:sDAlBWgZEn18TQKy@ayushcluster0.i6hkgm7.mongodb.net/?retryWrites=true&w=majority&appName=AyushCluster0";

const connectToMongo = () => {
  mongoose.connect(mongoURI);
};

module.exports = connectToMongo;
