const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const filmstarSchema = new Schema({
    fname : { type : String },
    lname : { type : String },
    age : { type : Number , minlength : 1, min : 1 },
    gender : { type : String, enum : ['M', 'F'] },
    movies : { type : Array },
    entryDate : { type: Date , default : Date.now()}
})

const filmstar = mongoose.model('filmstar', filmstarSchema);

//Query 1 : Finding all the FilmStars

//const findAll = filmstar.findOne({name : 'Brad'});

module.exports = filmstar