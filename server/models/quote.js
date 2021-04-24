const mongoose = require("mongoose");

var quoteSchema = new mongoose.Schema({
    quote: {
        type: String
    },
    author: {
        type: String
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    created_at: {
        type:Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Quote", quoteSchema);