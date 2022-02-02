import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import ContactUs from "./Components/ContactUs/ContactUs";
import Home from "./Pages/Home/Home";
import Resources from "./Pages/Resources/Resources";
import Login from "./Pages/Login/Login";

function App() {
	return (
		<AppContainerStyled>
			<BrowserRouter>
				<Navbar></Navbar>
				<ContactUs></ContactUs>
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route exact path='/home' element={<Home />} />
					<Route exact path='/login' element={<Login />} />
					<Route exact path='/resources' element={<Resources />} />
				</Routes>
			</BrowserRouter>
		</AppContainerStyled>
	);
}

const AppContainerStyled = styled.div`
	width: calc(100vw - (100vw - 100%));
`;

export default App;
