import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import LanguageContextProvider from "./Context/LanguageContext";
import { GlobalStyle } from "./GlobalStyled";
import IsLoggedContextProvider from "./Context/isLoggedContext";

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<LanguageContextProvider>
			<IsLoggedContextProvider>
				<App />
			</IsLoggedContextProvider>
		</LanguageContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
