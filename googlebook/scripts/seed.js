const mongoose = require("mongoose");
const db = require("../models");


mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/googlebooksdb"
);

const bookSeed =
{
    title: "Until the End of Time",
    authors: ["Brian Greene"],
    description: "From the world-renowned physicist and best-selling author of The Elegant Universe comes this captivating exploration of deep time and humanity's search for purpose. Until the End of Time is Brian Greene's breathtaking new exploration of the cosmos and our quest to understand it. Greene takes us on a journey across time, from our most refined understanding of the universe's beginning, to the closest science can take us to the very end. He explores how life and mind emerged from the initial chaos, and how our minds, in coming to understand their own impermanence, seek in different ways to give meaning to experience: in narrative, myth, religion, creative expression, science, the quest for truth, and our longing for the eternal. Through a series of nested stories that explain distinct but interwoven layers of reality--from quantum mechanics to consciousness to black holes--Greene provides us with a clearer sense of how we came to be, a finer picture of where we are now, and a firmer understanding of where we are headed. With this grand tour of the universe, beginning to end, Brian Greene allows us all to grasp and appreciate our fleeting but utterly exquisite moment in the cosmos.",
    image: "http://books.google.com/books/content?id=2RaZDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
    link: "http://books.google.com/books?id=2RaZDwAAQBAJ&hl=&source=gbs_api"
    
}


db.Book
    .remove({})
    .then(() => db.Book.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });