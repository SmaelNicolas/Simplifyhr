import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyle } from "./GlobalStyled";
import IsLoggedContextProvider from "./Context/isLoggedContext";
import FirestoreDocsContextProvider from "./Context/FirestoreDocsContext";
import LanguageContextProvider from "./Context/LanguageContext";

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<LanguageContextProvider>
			<IsLoggedContextProvider>
        <FirestoreDocsContextProvider>
				<App />
        </FirestoreDocsContextProvider>
			</IsLoggedContextProvider>
		</LanguageContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
