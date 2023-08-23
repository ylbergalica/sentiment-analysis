import analyze from '../src/data/analyze';

describe("analyze", () => {
	it("should have a positive score on a positive sentence", async () => {
		let recieved = await analyze('Seems like a nice day today!');
		// like = 2, nice = 3

		const expected = {
			score: 5,
		}
		
		expect(recieved.score).toBe(expected.score);
	});

	it("should have a negative score on a clearly negative sentence", async () => {
		let recieved = await analyze('This is such a bad video!');
		// bad = -3

		const expected = {
			score: -3,
		}
		
		expect(recieved.score).toBe(expected.score);
	});

	it("should have a negative score on word phrase with a negative meaning", async () => {
		let recieved = await analyze("I don't like this!");
		// like = -2 (because of 'dont')

		const expected = {
			score: -2,
		}
		
		expect(recieved.score).toBe(expected.score);
	});

	it("should have a negative score on a negative word with no apostrophe", async () => {
		let recieved = await analyze("I dont like this!");
		// like = -2 (because of 'dont')

		const expected = {
			score: -2,
		}
		
		expect(recieved.score).toBe(expected.score);
	});

	it("should have a neutral score on a netural sentence", async () => {
		let recieved = await analyze("Tbh, I don't know what to say.");
		// like = -2 (because of 'dont')

		const expected = {
			score: 0,
		}
		
		expect(recieved.score).toBe(expected.score);
	});
});