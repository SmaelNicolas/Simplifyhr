import { createContext, useEffect, useState } from "react";

export const LanguageContext = createContext([]);

const LanguageContextProvider = ({ children }) => {
	const [language, setLanguage] = useState("English");
	const [data, setData] = useState({});
	const [loading, setLoading] = useState(true);

	const loadingDelay = () => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	};

	useEffect(() => {
		if (language === "English") {
			fetch("Data/englishData.json")
				.then((res) => res.json())
				.then((data) => setData(data))
				.then(loadingDelay);
		} else {
			fetch("Data/spanishData.json")
				.then((res) => res.json())
				.then((data) => setData(data))
				.then(loadingDelay);
		}
	}, [language]);

	return (
		<LanguageContext.Provider
			value={{ setLanguage, language, data, loading, setLoading }}
		>
			{children}
		</LanguageContext.Provider>
	);
};

export default LanguageContextProvider;
