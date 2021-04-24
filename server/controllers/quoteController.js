const Quote = require('../models/quote');

exports.get_all_quotes = (req,res) => {
    Quote.find({} , (err, quote) => {
        if(err){
            console.log("There was an error while retrieving all the quotes");
        }
        else{
            res.json({
                "Quotes": quote
            });
        }
    })
    res.json([])
}