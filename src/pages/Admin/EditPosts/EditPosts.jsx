import { DeleteOutlineOutlined } from "@mui/icons-material";
import React, { useContext } from "react";
import { FirestoreDocsContext } from "../../../Context/FirestoreDocsContext";
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
							<ViewButton to={`/${p.id}`}>
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
