import React, { createContext, useEffect, useState } from "react";

const AnalyzerContext = createContext();

const AnalyzerProvider = ({ children }) => {
	const [sentiment, setSentiment] = useState("");
	const [sentimentResult, setResult] = useState({});

	return (
		<AnalyzerContext.Provider value={{
			sentiment, setSentiment,
			sentimentResult, setResult
		}}>
			{children}
		</AnalyzerContext.Provider>
	)
}

export { AnalyzerContext, AnalyzerProvider };