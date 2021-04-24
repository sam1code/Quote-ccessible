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
}

exports.insert_quote = (req, res) => {
    const newQuote = new Quote(req.body);
    newQuote.save((err, quote) => {
        if (err || !quote) return res.status(400).json({ error: err });
        res.send(quote);
    });
}

exports.update_quote = (req, res) => {
    Quote.findByIdAndUpdate(
        { _id: req.params.quoteId },
        { $set: req.body },
        { new: true, useFindAndModify: false },
        (err, updateQuote) => {
            if (err) return res.status(400).json({ error: err });
            if (!updateQuote)
            return res.status(400).json({ error: "No quote found to update" });
            res.json({ msg: "Quote updated sucessfully..", quote: { updateQuote } });
        }
    );
}

exports.delete_quote = (req, res) => {
    Quote.findByIdAndDelete(
        {_id: req.params.quoteId},
        (err, docs) => {
            if (err) return res.status(400).json({ error: err });
            if (!docs)
            return res.status(400).json({ error: "No quote found to delete" });
            res.json({ msg: "Quote deleted sucessfully..", docs: { docs } });
        }
    )
}