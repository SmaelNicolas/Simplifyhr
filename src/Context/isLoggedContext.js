import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
const idValue = uuidv4();

export const IsLoggedContext = createContext();

const IsLoggedContextProvider = ({ children }) => {
	//si coincide id & pass > true
	const [isLogged, setIsLogged] = useState();

	// si logea con check Remember Me > true
	const [allowLS, setAllowLS] = useState(false);

	// cambia el valor cuando clickea el chekbox Remember Me
	const valueAllowLs = () => {
		setAllowLS(!allowLS);
	};

	//si logeo Y tildo Remember Me > llama a crear ls;
	const valueIsLogged = (value) => {
		setIsLogged(value);
		value && allowLS && createLS();
	};

	//crea logged=true en LS
	const createLS = () => {
		localStorage.setItem(`${idValue}`, JSON.stringify(true));
	};

	//logged=false en LS y isLogged=false para q muestre la pantalla de login > NUEVO BOTON EN Admin.jsx que llama a esta funcion
	const logOutLS = () => {
		localStorage.setItem(`${idValue}`, JSON.stringify(false));
		setIsLogged(false);
		setAllowLS(false);
		localStorage.removeItem(`${idValue}`);
	};

	// si el valor es verdadero no pide login . Si no esta en LS o el valor es falso pide login > NUEVO USEEFFECT EN Login.jsx para q renderize cuando hay cambios en isLogged
	const getValueLS = () => {
		JSON.parse(localStorage.getItem(`${idValue}`))
			? setIsLogged(true)
			: setIsLogged(false);
	};

	//toma una unica vez el valor del LS
	useEffect(() => {
		getValueLS();
	}, []);

	return (
		<IsLoggedContext.Provider
			value={{ isLogged, valueIsLogged, valueAllowLs, logOutLS }}
		>
			{children}
		</IsLoggedContext.Provider>
	);
};

export default IsLoggedContextProvider;
