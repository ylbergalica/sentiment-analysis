import analyze from '../src/data/analyze';

describe("analyze", () => {
	it("should have a positive score on a positive sentence", async () => {
		let recieved = await analyze('Seems like a nice day today!');
		// like = 2, nice = 3
		
		expect(recieved.score > 0).toBeTruthy();
	});

	it("should have a negative score on a clearly negative sentence", async () => {
		let recieved = await analyze('This is such a bad video!');
		// bad = -3
		
		expect(recieved.score > 0).toBeFalsy();
	});

	it("should have a negative score on word phrase with a negative meaning", async () => {
		let recieved = await analyze("I don't like this!");
		// like = -2 (because of 'don't')
		
		expect(recieved.score > 0).toBeFalsy();
	});

	it("should have a negative score on a negative word with no apostrophe", async () => {
		let recieved = await analyze("I dont like this!");
		// like = -2 (because of 'dont')
		
		expect(recieved.score > 0).toBeFalsy();
	});

	it("should have a neutral score on a netural sentence", async () => {
		let recieved = await analyze("Tbh, I don't know what to say.");
		
		expect(recieved.score === 0).toBeTruthy();
	});

	it("should have a positive score on a laughing emoji", async () => {
		let result = await analyze("😂");
		
		expect(result.score > 0).toBeTruthy();
	});

	it("should have a negative score on a crying emoji", async () => {
		let result = await analyze("😭");
		
		expect(result.score > 0).toBeFalsy();
	});
});