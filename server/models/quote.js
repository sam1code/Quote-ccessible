const mongoose = require("mongoose");

var quoteSchema = new mongoose.Schema({
    quote: {
        type: String,
        required: true
    },
    author: {
        type: String,
        default: ''
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    created_at: {
        type:Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Quote", quoteSchema);