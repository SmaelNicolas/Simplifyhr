import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../../Context/LanguageContext";
import { database } from "../../../Firebase/Firebase";
import { collection } from "firebase/firestore";
import { Button, Container, Wrapper } from "./PostsContainerStyle";
import { getPosts } from "../../../Helpers/getPosts";
import PostCard from "../PostItem/PostCard";

const PostsContainer = () => {
	const [posts, setPosts] = useState([]);
	const [postsOnWindow, setPostsOnWindow] = useState(3);
	const { language } = useContext(LanguageContext);
	const postsLanguage =
		language === "en" ? "blogPostsEnglish" : "blogPostsSpanish";

	const postsCollection = collection(database, postsLanguage);

	useEffect(() => {
		getPosts(postsCollection).then((resultado) => {
			const res = resultado;
			setPosts(res);
		});
		return () => {};
	}, [language]);

	const slice = posts.slice(0, postsOnWindow);

	const showMore = () => {
		setPostsOnWindow(postsOnWindow + postsOnWindow);
	};

	return (
		<Container>
      <Wrapper>
			{slice.map((el) => {
				return (
					<PostCard
						key={el.id}
						title={el.title}
						img={el.imgUrl}
						body={el.body}
						date={el.date}
						id={el.id}
					/>
				);
			})}
      </Wrapper>
			<Button onClick={showMore}>
				{language === "en" ? "Show More" : "Ver Más"}
			</Button>
		</Container>
	);
};

export default PostsContainer;
