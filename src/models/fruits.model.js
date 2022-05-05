
const mongoose = require("mongoose");

const FruitsSchema = new mongoose.Schema({
    
image: {type: String,},
name : { type: String,},
price : {type: Number,},
weight : { type : Number},
feild : {type : String},
Description : {type :String,},
Benefits : { type : String,},
Info : { type : String,}
});

const FruitsProdeuct = mongoose.model("fruits", FruitsSchema);

module.exports = FruitsProdeuct;