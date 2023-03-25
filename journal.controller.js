const { fetchJournals, addJournal } = require("./journal.service");

const add = async (req, res) => {

    const {title, publishedDate, body}  = req.body;
    await addJournal({title, body,publishedDate});
    res.send("Successfully added a journal");

};

const list = async(req, res)=>{
    const {limit, page, search} = req.query;
    const result = await fetchJournals(limit, page, search);
    res.send(result);
}

module.exports =  {add, list};