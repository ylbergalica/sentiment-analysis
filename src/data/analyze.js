import Sentiment from 'sentiment';

const sentimentAnalyzer = new Sentiment();

export default async (text) => {
	return sentimentAnalyzer.analyze(text.current.value);
};