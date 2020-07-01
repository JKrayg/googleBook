var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var bookSchema = new Schema({
    
    title: {
    type: String,
    trim: true,
    required: "Title is Required"
  },
  
  author: {
    type: String,
    trim: true,
    required: true
  },
  
  description: {
    type: String,
    trim: true,
    required: true
  },

  image: {
      type: String,
      trim: true
  },

  link: {
    type: String,
    trim: true
  }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;