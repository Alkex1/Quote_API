const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const QuoteSchema = new Schema ({
    quote: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: false
    }
})

module.exports = QuoteSchema;