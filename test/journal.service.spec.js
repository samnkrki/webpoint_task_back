const { addJournal, fetchJournals } = require("../journal.service");
const Journal = require("../journal.model");


jest.mock("../journal.model");

describe("addJournal",()=>{
    afterEach(()=>{
        jest.clearAllMocks();
    })
    const mockData = {title: "Test title", body: "today body", publishedDate:"2053-07-07"}
    it("should add a new journal if details are provided",async()=>{
        const mockResponse = "some mocked save result";
        const newJournal = new Journal();
        newJournal.save.mockResolvedValue(mockResponse);
        const response = await addJournal({title: mockData.title, publishedDate: mockData.publishedDate, body: mockData.body});
        expect(newJournal.save).toBeCalledTimes(1);
        expect(response).toMatch(mockResponse);
    })
    it("should throw an exception if journal could not be added",async()=>{
        const mockResponse = new Error("some mocked save result that throws error");
        const newJournal = new Journal();
        newJournal.save.mockRejectedValue(mockResponse);
        await expect(addJournal({title: mockData.title, publishedDate: mockData.publishedDate, body: mockData.body})).rejects.toThrow(mockResponse);
    })
})