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

const PostCard = ({ title, img, id, date, language }) => {
	const ts = new Date(date);

	return (
		<CardContainer>
			<Image src={img} />
			<Info>
				<Title>{title.toUpperCase()}</Title>
			</Info>
			<Wrapper>
				<Button to={`post/${id}`}>	{language === "English" ? "Show More" : "Ver Más"}</Button>
				<Dot/>
				<DateString>{ts.toLocaleDateString()}</DateString>
			</Wrapper>
		</CardContainer>
	);
};

export default PostCard;
