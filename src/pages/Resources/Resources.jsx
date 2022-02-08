import PostsContainer from "./PostsContainer/PostsContainer";
import { ResourcesContainer, Title } from "./ResourcesStyled";

function Resources() {
	return (
		<ResourcesContainer>
			<Title>Blog</Title>
			<PostsContainer />
		</ResourcesContainer>
	);
}

export default Resources;
