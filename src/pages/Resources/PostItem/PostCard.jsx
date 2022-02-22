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
				<Wrapper>
					<Button to={`/${id}`}>
						Read More
					</Button>
					<Dot />
					<DateString>{ts.toLocaleDateString()}</DateString>
				</Wrapper>
			</Info>
		</CardContainer>
	);
};

export default PostCard;
