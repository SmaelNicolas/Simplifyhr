import { useContext } from "react";
import { LanguageContext } from "../../../../../Context/LanguageContext";

import svg1 from "../../../../../Assest/trust.svg";
import svg2 from "../../../../../Assest/low.svg";
import svg3 from "../../../../../Assest/flexible.svg";

import {
	CardStyled,
	ImgContainer,
	TextContainer,
	TextContent,
	Title,
} from "./CardsStyled";

function Cards() {
	const { data } = useContext(LanguageContext);

	return (
		<>
			{console.log("RENDER WHY US CARDS")}
			<CardStyled alignSelf='flex-end'>
				<ImgContainer url={svg1} />
				<TextContainer>
					<Title>{data.whyUs.cards.card1.title}</Title>
					<TextContent>{data.whyUs.cards.card1.body}</TextContent>
				</TextContainer>
			</CardStyled>
			<CardStyled alignSelf='flex-start'>
				<ImgContainer url={svg2} />
				<TextContainer>
					<Title>{data.whyUs.cards.card2.title}</Title>
					<TextContent>{data.whyUs.cards.card2.body}</TextContent>
				</TextContainer>
			</CardStyled>
			<CardStyled alignSelf='center'>
				<ImgContainer url={svg3} />
				<TextContainer width='500px'>
					<Title>{data.whyUs.cards.card3.title}</Title>
					<TextContent>{data.whyUs.cards.card3.body}</TextContent>
				</TextContainer>
			</CardStyled>
		</>
	);
}

export default Cards;
