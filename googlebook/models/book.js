var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var bookSchema = new Schema({
    
    title: {
    type: String,
    trim: true
  },
  
  author: {
    type: String,
    trim: true
  },
  
  description: {
    type: String,
    trim: true
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