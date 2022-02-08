import { useContext, useState } from "react";
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
	const [showContactUs, setShowContactUs] = useState(false);

	const toggleShow = () => {
		setShowContactUs(!showContactUs);
	};

	return (
		<AppContainerStyled>
			{loading ? (
				<LoadingScreen />
			) : (
				<BrowserRouter>
					<Navbar toggleShow={toggleShow}></Navbar>
					<ContactUs
						toggleShow={toggleShow}
						showContactUs={showContactUs}
					></ContactUs>
					<Routes>
						<Route exact path='/' element={<Home />} />
						<Route exact path='/login' element={<Login />} />
						<Route
							exact
							path='/resources'
							element={<Resources />}
						/>
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
