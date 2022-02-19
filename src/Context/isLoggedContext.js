import React, { createContext, useState, useEffect } from "react";

export const IsLoggedContext = createContext();

const IsLoggedContextProvider = ({ children }) => {
	//si si logeo , crea en LocalStorate  logged = true;
	const valueIsLogged = (value) => {
		setIsLogged(value);
		value && createLS();
	};

	//busca en LS y si el valor es verdadero no pide login . Si no esta en LS o el valor es falso pide login
	const getValueLS = () => {
		JSON.parse(localStorage.getItem("logged"))
			? setIsLogged(true)
			: setIsLogged(false);
	};

	//crea logged en LS
	const createLS = () => {
		localStorage.setItem("logged", JSON.stringify(true));
	};

	//pone en falso el valor de LS logged creado en el momento que hizo login.
	const logOutLS = () => {
		localStorage.setItem("logged", JSON.stringify(false));
	};

	const [isLogged, setIsLogged] = useState();
	console.log(isLogged);

	//toma 1 unica vez el valor del LS
	useEffect(() => {
		getValueLS();
	}, []);

	return (
		<IsLoggedContext.Provider value={{ isLogged, valueIsLogged, logOutLS }}>
			{children}
		</IsLoggedContext.Provider>
	);
};

export default IsLoggedContextProvider;
