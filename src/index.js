import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import LanguageContextProvider from "./Context/LanguageContext";
import { GlobalStyle } from "./GlobalStyled";

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<LanguageContextProvider>
			<App />
		</LanguageContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
