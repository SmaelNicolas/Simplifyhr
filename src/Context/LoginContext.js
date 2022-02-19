import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext([]);

const LoginContextProvider = ({ children }) => {
	const [isLogged, setIsLogged] = useState(false);

	const valueIsLogged = (value) => {
		setIsLogged(value);
	};

	return (
		<LoginContext.Provider value={{ isLogged, valueIsLogged }}>
			{children}
		</LoginContext.Provider>
	);
};

export default LoginContextProvider;
