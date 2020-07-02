const express = require("express");
//const path = require("path");
const mongoose = require("mongoose")
const axios = require("axios")
var db = require("./models");
const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("/", function (req, res) {
    res.render("index.html")
})

app.get("/api/books", function (req, res) {
  axios.get("https://www.googleapis.com/books/v1/volumes?q=earth&key=AIzaSyBpP-n71t2WyJ-wVIjf5BRMqrkt3ti_4_w")
  .then(function (response) {
    res.render(response.data)
  })
})

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooksdb", { useNewUrlParser: true });

db.Book.create({ name: "googlebooksdb" })
  .then(function(dbBook) {
    console.log(dbBook);
  })
  .catch(function(err) {
    console.log(err.message);
  });

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}!`);
});
