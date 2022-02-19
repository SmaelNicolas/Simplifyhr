import { DeleteOutlineOutlined } from "@mui/icons-material";
import { collection, deleteDoc, doc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../../Context/LanguageContext";
import database from "../../../Firebase/Firebase";
import { getPosts } from "../../../Helpers/getPosts";
import {
	Container,
	Row,
	Image,
	Title,
	ViewButton,
	DeleteButton,
	Wrapper,
} from "./EditPostsStyles";

const EditPosts = () => {
	const [posts, setPosts] = useState([]);
	const { setLoading, loading } = useContext(LanguageContext);

	const postsCollection = collection(database, "blogPostsEnglish");

	const deletePosts = async (id) => {
		await deleteDoc(doc(database, "blogPostsEnglish", id));
		refreshPosts();
	};

	const refreshPosts = () => {
		getPosts(postsCollection, setLoading, loading).then((resultado) => {
			const res = resultado;
			setPosts(res);
		});
	};

	useEffect(() => {
		refreshPosts();
		return () => {};
	}, []);


	return (
		<Container>
			{posts.map((p) => {
				return (
					<Row>
						<Image src={p.imgUrl} />
						<Title>{p.title}</Title>
						<Wrapper>
							<ViewButton to={`/post/${p.id}`}>Ver post</ViewButton>
							<DeleteButton
								onClick={() => {
									deletePosts(p.id);
								}}
							>
								<DeleteOutlineOutlined />
							</DeleteButton>
						</Wrapper>
					</Row>
				);
			})}
		</Container>
	);
};

export default EditPosts;
