import React from "react";
import {
	Button,
	CardContainer,
	DateString,
	Image,
	Info,
	Title,
} from "./PostCardStyle";

const PostCard = ({ title, img, body, id, date }) => {
	const ts = new Date(date);
	return (
		<CardContainer>
			<Image src={img} />
			<Info>
				<Title>{title.toUpperCase()}</Title>
				<DateString>{ts.toLocaleDateString()}</DateString>
			</Info>
			<Button>Ver mas</Button>
		</CardContainer>
	);
};

export default PostCard;
