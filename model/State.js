const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//this model is for get, post, patch, and delete of fun facts
const stateSchema = new Schema({
    stateCode: { type: String, required: true, unique: true },
    funfacts: [String]
});

module.exports = mongoose.model("State", stateSchema);