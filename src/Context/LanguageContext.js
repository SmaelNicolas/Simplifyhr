import { createContext, useState } from "react";

export const LanguageContext = createContext([]);

const LanguageContextProvider = ({ children }) => {
	const [language, setLanguage] = useState("en");
	console.log(language);

  
	return (
		<LanguageContext.Provider value={{ setLanguage, language }}>
			{children}
		</LanguageContext.Provider>
	);
};

export default LanguageContextProvider;
