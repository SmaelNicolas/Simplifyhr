import { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../../Context/LanguageContext";
import { database } from "../../../Firebase/Firebase";
import { collection } from "firebase/firestore";
import { Arrow, Button, Container, Wrapper } from "./PostsContainerStyle";
import { getPosts } from "../../../Helpers/getPosts";
import PostCard from "../PostItem/PostCard";
import LoadingScreen from "../../../Components/LoadingScreen/LoadingScreen";
import { ArrowDownwardRounded } from "@mui/icons-material";

const PostsContainer = () => {
	const [posts, setPosts] = useState([]);
	const [postsOnWindow, setPostsOnWindow] = useState(3);
	const { language, setLoading, loading } = useContext(LanguageContext);

	const postsCollection = collection(database, "blogPostsEnglish");

	useEffect(() => {
		getPosts(postsCollection, setLoading, loading).then((resultado) => {
			const res = resultado;
			setPosts(res);
		});
		return () => {};
	}, []);

	const slice = posts.slice(0, postsOnWindow);

	const showMore = () => {
		setPostsOnWindow(postsOnWindow + postsOnWindow);
	};

	return (
		<>
			{slice.length < 1 ? (
				<LoadingScreen />
			) : (
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
									language={language}
								/>
							);
						})}
					</Wrapper>
					{slice.length !== posts.length && (
						<Button onClick={showMore}>
							<Arrow/>
							{language === "English" ? "Show More" : "Ver Más"}
						</Button>
					)}
				</Container>
			)}
		</>
	);
};

export default PostsContainer;
