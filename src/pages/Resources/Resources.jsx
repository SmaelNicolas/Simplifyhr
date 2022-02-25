import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { LanguageContext } from "../../Context/LanguageContext";
import PostsContainer from "./PostsContainer/PostsContainer";
import { ResourcesContainer, Title } from "./ResourcesStyled";

function Resources() {
	const { data } = useContext(LanguageContext);
	return (
		<>
			<Helmet>
				<title>Simplify-hr / Resources</title>
				<meta name='description' content={data.description} />
				<link rel='canonical' href='' />
			</Helmet>
			<ResourcesContainer>
				<PostsContainer />
			</ResourcesContainer>
		</>
	);
}

export default Resources;
