import { useContext } from "react";
import {
	ImgContainer,
	Section,
	TextContainer,
	TextContent,
	Title,
} from "./WhyUsContentStyled";

import { LanguageContext } from "../../../../Context/LanguageContext";

function WhyUsContent() {
	const { data } = useContext(LanguageContext);

	return (
		<>
			<Section alignSelf='flex-end'>
				<ImgContainer url='https://picsum.photos/200/200'></ImgContainer>
				<TextContainer>
					<Title>{data.whyUs.cards.card1.title}</Title>
					<TextContent>{data.whyUs.cards.card1.body}</TextContent>
				</TextContainer>
			</Section>
			<Section alignSelf='flex-start'>
				<ImgContainer url='https://picsum.photos/200/200'></ImgContainer>
				<TextContainer>
					<Title>{data.whyUs.cards.card2.title}</Title>
					<TextContent>{data.whyUs.cards.card2.body}</TextContent>
				</TextContainer>
			</Section>
			<Section alignSelf='center'>
				<ImgContainer url='https://picsum.photos/200/200'></ImgContainer>
				<TextContainer>
					<Title>{data.whyUs.cards.card3.title}</Title>
					<TextContent>{data.whyUs.cards.card3.body}</TextContent>
				</TextContainer>
			</Section>
		</>
	);
}

export default WhyUsContent;
