const db = require("../models");


module.exports = {
  findAll: function(req, res) {
    db.Book.find(req.query)
    .then(dbModel => res.json(dbModel))
    .catch(err => console.log(err))
  },
  findById: function(req, res) {
    db.Book.findById(req.params.id)
    .then(dbModel => res.json(dbModel))
    .catch(err => console.log(err))
  },
  
};