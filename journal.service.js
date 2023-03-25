const Journal = require("./journal.model");


/**
 * 
 * @param {{title: String, body?: String, publishedDate: String}} param0 
 * @returns 
 */
async function addJournal({ title, body, publishedDate }) {
    try {
        const newJournal = new Journal();
        newJournal.title = title;
        newJournal.publishedDate = publishedDate;
        if (body) {
            newJournal.body = body;
        }
        return newJournal.save();
    } catch (error) {
        throw error;
    }
}

/**
 * 
 * @param {Number} limit 
 * @param {Number} page 
 * @param {String} search should be a valid date string 
 * @returns 
 */
async function fetchJournals(limit, page, search) {
    try {
        const skip = (page - 1) * limit;
        const allJournals = await Journal.find({ ...(search && { publishedDate: { $eq: new Date(search) } }) })
            .skip(skip)
            .limit(limit);
        const count = await Journal.countDocuments();
        return {
            data: allJournals,
            totalData: count,
            totalPages: Math.ceil(count / limit),
            limit: +limit,
            currentPage: +page
        }
    } catch (error) {
        throw error;
    }
}

module.exports = { addJournal, fetchJournals };