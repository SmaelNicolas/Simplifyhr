import Header from "./Header/Header";
import Services from "./Services/Services";
import WhyUs from "./WhyUs/WhyUs";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { LanguageContext } from "../../Context/LanguageContext";

function Home() {
	const { data } = useContext(LanguageContext);
	return (
		<>
			{/* HOME CONTENT */}
			<Helmet>
				<title>Simplify-hr</title>
				<meta name='description' content={data.description} />
				<link rel='canonical' href='' />
			</Helmet>
			<Header />
			<WhyUs />
			<Services />
		</>
	);
}

export default Home;
