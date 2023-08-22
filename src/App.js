import "./styles/global.css";

import InputFields from './components/InputFields.js';
import Results from "./components/Results";

import { AnalyzerProvider } from "./context/analyzer-context";

export default function App() {
	return (
		<AnalyzerProvider>
			<div className='w-full h-[10vh] flex flex-col justify-center items-center'>
				<h1 className='text-2xl'>Sentiment Analyzer</h1>
			</div>

			<div className='w-full h-[80vh] flex flex-col justify-center items-center'>
				<InputFields prompt='Give me a sentence:' submit="Analyze" />
				<Results />
			</div>
		</AnalyzerProvider>
	)
}