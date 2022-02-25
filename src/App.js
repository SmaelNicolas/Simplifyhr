import { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageContext } from "./Context/LanguageContext";
import styled from "styled-components";
import { Helmet } from "react-helmet-async";

import Navbar from "./Components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Resources from "./pages/Resources/Resources";
import Login from "./pages/Login/Login";
import Footer from "./Components/Footer/Footer";
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen";
import PostView from "./pages/Resources/PostView/PostView";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse/TermsOfUse";
import Cookies from "./pages/Cookies/Cookies";
import ScrollToTop from "./Helpers/scrollToTop";

function App() {
	const { loading, data } = useContext(LanguageContext);
	return (
		<>
			<Helmet>
				<title>Loading Symplify-hr</title>
				<meta name='description' content={data.description} />
				<link rel='canonical' href='' />
			</Helmet>
			<AppContainerStyled>
				{loading ? (
					<LoadingScreen />
				) : (
					<BrowserRouter>
						<ScrollToTop />
						<Navbar />
						<Routes>
							<Route exact path='/' element={<Home />} />
							<Route exact path='/login' element={<Login />} />
							<Route
								exact
								path='/resources'
								element={<Resources />}
							/>
							<Route
								exact
								path='/cookies'
								element={<Cookies />}
							/>
							<Route
								exact
								path='/legal-terms'
								element={<TermsOfUse />}
							/>
							<Route
								exact
								path='/privacy-policy'
								element={<PrivacyPolicy />}
							/>
							<Route
								exact
								path='/:postId'
								element={<PostView />}
							/>
						</Routes>
						<Footer />
					</BrowserRouter>
				)}
			</AppContainerStyled>
		</>
	);
}

const AppContainerStyled = styled.div`
	/* Para evitar el scroll horizontal  en los contenedores de 100vw  cuando hay una barra de desplazamiento en Y */
	width: calc(100vw - (100vw - 100%));
	min-height: 100vh;
`;

export default App;
