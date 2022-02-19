import { DeleteOutlineOutlined } from "@mui/icons-material";
import { collection, deleteDoc, doc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { FirestoreDocsContext } from "../../../Context/FirestoreDocsContext";
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
	const { posts, deletePosts } = useContext(FirestoreDocsContext);

	return (
		<Container>
			{posts.map((p) => {
				return (
					<Row key={p.id}>
						<Image src={p.imgUrl} />
						<Title>{p.title}</Title>
						<Wrapper>
							<ViewButton to={`/post/${p.id}`}>
								Ver post
							</ViewButton>
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
