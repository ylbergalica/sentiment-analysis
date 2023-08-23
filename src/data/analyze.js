import Sentiment from 'sentiment';

const sentimentAnalyzer = new Sentiment();

/**
 * Performs sentiment analysis on the given text.
 * @async
 * @param {string} text - The text to be analyzed.
 * @returns {Promise<object>} A promise that resolves to an object containing the resulting object.
 */
const analyze = async (text) => {
	return sentimentAnalyzer.analyze(text);
};

export default analyze;