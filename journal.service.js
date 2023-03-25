async function addJournal({title, body, publishedDate}) {
    try {
        // add this data to the database;
        return "success";
    } catch (error) {
        throw error;
    }
}

async function fetchJournals(limit, page, search) {
    try {
        return {data:[]};
        // fetches all journal by date;
    } catch (error) {
        throw error;
    }
}

module.exports = {addJournal, fetchJournals};