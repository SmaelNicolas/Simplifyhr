import {
	Button,
	CardContainer,
	DateString,
	Dot,
	Image,
	Info,
	Title,
	Wrapper,
} from "./PostCardStyle";

const PostCard = ({ title, img, id, date }) => {
	const ts = new Date(date);

	return (
		<CardContainer>
			<Image src={img} />
			<Info>
				<Title>{title.toUpperCase()}</Title>
			</Info>
			<Wrapper>
				<Button to={`post/${id}`}>Ver mas</Button>
				<Dot src={"./Images/circuloicono.png"} />
				<DateString>{ts.toLocaleDateString()}</DateString>
			</Wrapper>
		</CardContainer>
	);
};

export default PostCard;
