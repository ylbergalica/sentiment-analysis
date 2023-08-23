import { useContext, useRef } from 'react';
import analyze from '../../data/analyze';

import { AnalyzerContext } from '../../context/analyzer-context';

const InputFields = ({ prompt, submit }) => {
	const { setResult, setSentiment } = useContext(AnalyzerContext);
	const text = useRef({});

	const handleAnalyze = async () => {
		const result = await analyze(text?.current.value);
		console.log(result);
		setResult(result);
		setSentiment(result.score > 0 ? "Positive" : result.score < 0 ? "Negative" : "Neutral");
	};

	return (
		<div className="flex flex-col items-center w-full">
			<h2 className='text-lg'>{prompt}</h2>
			<textarea ref={text} className='w-[80%] md:w-[500px] min-h-7 mt-4 bg-teal-50 text-black rounded' type="text" />
			<button className='w-[80%] md:w-[500px] h-10 mt-2 bg-teal-500 rounded border-2 border-teal-700 text-black text-xl' onClick={handleAnalyze}>{submit}</button>
		</div>
	)
}

export default InputFields;