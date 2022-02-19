import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GeneralContextProvider from "./Context/GeneralContext";
import { GlobalStyle } from "./GlobalStyled";

ReactDOM.render(
	<React.StrictMode>
		<GlobalStyle />
		<GeneralContextProvider>
			<App />
		</GeneralContextProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
