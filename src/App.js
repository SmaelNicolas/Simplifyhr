import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import ContactUs from "./Components/ContactUs/ContactUs";
import Home from "./Pages/Home/Home";
import Resources from "./Pages/Resources/Resources";
import Login from "./Pages/Login/Login";
import Footer from "./Components/Footer/Footer";

function App() {
	return (
		<AppContainerStyled>
			<BrowserRouter>
				{/* Barra de navegacion */}
				<Navbar></Navbar>
				{/* Formulario de contacto tipo MODAL */}
				<ContactUs></ContactUs>
				{/* Rutas a las diferentes paginas (2 home, "/" donde inicia , "/home" para usar hashlink) */}
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route exact path='/home' element={<Home />} />
					<Route exact path='/login' element={<Login />} />
					<Route exact path='/resources' element={<Resources />} />
				</Routes>
				<Footer></Footer>
			</BrowserRouter>
		</AppContainerStyled>
	);
}

const AppContainerStyled = styled.div`
	/* Para evitar el scroll horizontal  en los contenedores de 100vw  cuando hay una barra de desplazamiento en Y */
	width: calc(100vw - (100vw - 100%));
`;

export default App;
