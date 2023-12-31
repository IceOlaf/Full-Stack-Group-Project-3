const {Schema, model} = require('mongoose');

const bookSchema = new Schema ({
    authors: [
        {
            type: String
        }
    ],
    description: {
        type: String,
        required: true
    },
    bookId: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    link: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    available: {
        type: Boolean,
        required: true
    }
});

const Book = model('Book', bookSchema);

module.exports = {Book, bookSchema};

