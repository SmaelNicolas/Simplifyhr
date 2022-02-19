import { createContext } from "react";
import FirestoreDocsContextProvider from "./FirestoreDocsContext";
import LanguageContextProvider from "./LanguageContext";
import LoginContextProvider from "./LoginContext";

export const GeneralContext = createContext([]);

const GeneralContextProvider = ({ children }) => {
	return (
		<GeneralContext.Provider>
			<LanguageContextProvider>
				<LoginContextProvider>
					<FirestoreDocsContextProvider>
						{children}
					</FirestoreDocsContextProvider>
				</LoginContextProvider>
			</LanguageContextProvider>
		</GeneralContext.Provider>
	);
};

export default GeneralContextProvider;
