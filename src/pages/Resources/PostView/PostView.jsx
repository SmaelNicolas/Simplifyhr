import { collection } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LanguageContext } from "../../../Context/LanguageContext";
import database from "../../../Firebase/Firebase";
import { getPosts } from "../../../Helpers/getPosts";
import {
	Author,
	Body,
	Container,
	Image,
	Info,
	MainContainer,
	ReadTime,
	ReturnButton,
	ReturnContainer,
	Title,
	VerticalLine,
	Wrapper,
} from "./PostViewStyle";

const PostView = () => {
	const [post, setPost] = useState({});
	const { postId } = useParams();
	const { language, setLoading, loading } = useContext(LanguageContext);
	const postsCollection = collection(database, "blogPostsEnglish");

	useEffect(() => {
		getPosts(postsCollection, setLoading, loading).then((resultado) => {
			const res = resultado.find((el) => el.id === postId);
			setPost(res);
		});
		return () => {};
	}, []);
	console.log(post);
	return (
		<Container>
			<ReturnContainer>
				<ReturnButton to={"/resources"}>
					{language === "English" ? "Return to the blog" : "Regresar al blog"}
				</ReturnButton>
			</ReturnContainer>
			<MainContainer>
				<Info>
					<Title>{post.title}</Title>
					<Wrapper>
						<Author>{post.author}</Author>
						<VerticalLine />
						<ReadTime>{`${post.readTime} min`}</ReadTime>
					</Wrapper>
				</Info>
				<Image src={post.imgUrl} />
				<Body>{post.body}</Body>
			</MainContainer>
		</Container>
	);
};

export default PostView;
