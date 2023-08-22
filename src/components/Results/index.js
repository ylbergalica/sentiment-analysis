import { useContext } from "react";

import { AnalyzerContext } from "../../context/analyzer-context";

const Results = () => {
	const { sentiment, sentimentResult } = useContext(AnalyzerContext);

	return (
		<div>
			<div className='h-10 mt-6 text-xl'>Overall: {sentiment}</div>
			<div className='h-10 text-xl'>Score: {sentimentResult.score}</div>
		</div>
	)
}

export default Results;