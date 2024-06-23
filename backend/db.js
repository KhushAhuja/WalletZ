const mongoose = require("mongoose");
const { MONGO_URL } = require("./config.js");

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  firstName: {
    type: String,
    required: true,
    trim : true,
    maxlength: 30
  },
  lastName: {
    type: String,
    required: true,
    trim : true,
    maxlength: 30
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  }
});

const User = mongoose.model("User", userSchema);

module.exports = User;


