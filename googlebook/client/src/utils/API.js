import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q="
const APIKEY = "&key=AIzaSyBpP-n71t2WyJ-wVIjf5BRMqrkt3ti_4_w"

export default {
  getBook: function (query) {
    return axios.get(BASEURL + query + APIKEY);
  },
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id).then(result => result.data);
  },

  saveBook: function (bookData) {
    return axios.post("/api/books", bookData).then(result => result.data);
  },

  savedBooks: function () {
    return axios.get("/api/books").then(result => result.data);
  }
};
