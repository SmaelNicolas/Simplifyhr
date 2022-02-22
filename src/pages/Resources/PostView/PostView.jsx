import { ArrowBackIosNewRounded } from "@mui/icons-material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FirestoreDocsContext } from "../../../Context/FirestoreDocsContext";
import { LanguageContext } from "../../../Context/LanguageContext";
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
	const { language } = useContext(LanguageContext);
	const { posts } = useContext(FirestoreDocsContext);

	useEffect(() => {
		const res = posts.find((el) => el.id === postId);
		setPost(res);
	}, []);
  
	console.log(post);
	return (
		<Container>
			<ReturnContainer>
				<ReturnButton to={"/resources"}>
					{" "}
					<ArrowBackIosNewRounded />
					{language === "English" ? "Return to the blog" : "Regresar al blog"}
				</ReturnButton>
			</ReturnContainer>
			<MainContainer>
				<Info>
					<Title>{post.title}</Title>
					<Wrapper>
						<Author>{`Author: ${post.author}`}</Author>
						<VerticalLine />
						<ReadTime>{`Read time: ${post.readTime} min`}</ReadTime>
					</Wrapper>
				</Info>
				<Image src={post.imgUrl} />
				<Body>{post.body}</Body>
			</MainContainer>
		</Container>
	);
};

export default PostView;
