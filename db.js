const mongoose = require("mongoose");

const mongoURI = process.env.MONGO_URI;

const connectToMongo = () => {
  mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));
};

module.exports = connectToMongo;

