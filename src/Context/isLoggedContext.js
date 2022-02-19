import React, { createContext, useState } from "react";

export const IsLoggedContext = createContext();

const IsLoggedContextProvider = ({ children }) => {
	const [isLogged, setIsLogged] = useState(false);
  console.log(isLogged);

	const valueIsLogged = (value) => {
		setIsLogged(value);
	};
	return (
		<IsLoggedContext.Provider value={{ isLogged, valueIsLogged }}>
			{children}
		</IsLoggedContext.Provider>
	);
};

export default IsLoggedContextProvider;
