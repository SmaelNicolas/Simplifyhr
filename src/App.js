import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageContext } from "./Context/LanguageContext";
import styled from "styled-components";

import Navbar from "./Components/Navbar/Navbar";
import ContactUs from "./Components/ContactUs/ContactUs";
import Home from "./pages/Home/Home";
import Resources from "./pages/Resources/Resources";
import Login from "./pages/Login/Login";
import Footer from "./Components/Footer/Footer";
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen";

function App() {
	const { loading } = useContext(LanguageContext);

	return (
		<AppContainerStyled>
			{loading ? (
				<LoadingScreen />
			) : (
				<BrowserRouter>
					{/* Barra de navegacion */}
					<Navbar></Navbar>
					{/* Formulario de contacto tipo MODAL */}
					<ContactUs></ContactUs>
					{/* Rutas a las diferentes paginas (2 home, "/" donde inicia , "/home" para usar hashlink) */}
					<Routes>
						<Route exact path="/" element={<Home />} />
						<Route exact path="/home" element={<Home />} />
						<Route exact path="/login" element={<Login />} />
						<Route exact path="/resources" element={<Resources />} />
					</Routes>
					<Footer></Footer>
				</BrowserRouter>
			)}
		</AppContainerStyled>
	);
}

const AppContainerStyled = styled.div`
	/* Para evitar el scroll horizontal  en los contenedores de 100vw  cuando hay una barra de desplazamiento en Y */
	width: calc(100vw - (100vw - 100%));
`;

export default App;
