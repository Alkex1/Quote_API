const QuoteModel = require("./../databases/models/quote_model")

async function create (req, res) {
    let {quote, author} = req.body
    let nquote = await QuoteModel.create({quote, author})
    .catch(err => res.status(500).send(err))
    res.json(nquote)
    
}

async function index (req, res) {
    let quote = await QuoteModel.find()
    res.json(quote)
}

async function show (req, res) {
    let {id} = req.params;
    let quote = await QuoteModel.findById(id)
    res.json(quote)
}

async function edit (req, res) {
    let { id } = req.params;
    let quote = await QuoteModel.findById(id);
    res.json(quote)
};

async function update (req, res) {
    let { id } = req.params;
    let { quote, author } = req.body; 
    await QuoteModel.findByIdAndUpdate(id, { quote, author });
    res.redirect(`/quotes/${id}`)
}

async function destroy (req, res) {
    let { id } = req.params;
    let quote = await QuoteModel.findByIdAndRemove(id)
    res.redirect("/quotes")
}

module.exports = {
    create,
    index,
    show,
    edit,
    update,
    destroy
}