const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({

  name:String,

  vitaminC:Number,

  antioxidants:Number,

  protein:Number,

  fat:Number,

  img:String
});

module.exports = mongoose.model("Food", foodSchema);