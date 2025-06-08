// const mongoose = require("mongoose");
// // const mongoURI = "mongodb://localhost:27017/inotebook";
// const mongoURI =
//   "mongodb+srv://ayushkumbhalkar68:sDAlBWgZEn18TQKy@ayushcluster0.i6hkgm7.mongodb.net/?retryWrites=true&w=majority&appName=AyushCluster0";

// const connectToMongo = () => {
//   mongoose.connect(mongoURI);
// };

// module.exports = connectToMongo;
const mongoose = require("mongoose");

const mongoURI = process.env.MONGO_URI;

const connectToMongo = () => {
  mongoose
    .connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));
};

module.exports = connectToMongo;
