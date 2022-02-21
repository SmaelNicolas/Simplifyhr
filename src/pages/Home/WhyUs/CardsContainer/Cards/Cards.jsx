import { useContext } from "react";
import { LanguageContext } from "../../../../../Context/LanguageContext";

import svg1 from "../../../../../Assets/trust.svg";
import svg2 from "../../../../../Assets/low.svg";
import svg3 from "../../../../../Assets/flexible.svg";

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
			<CardStyled alignSelf='center' margin='0px 0px 0px 150px'>
				<ImgContainer url={svg1} />
				<TextContainer>
					<Title>{data.whyUs.cards.card1.title}</Title>
					<TextContent width='100%'>
						{data.whyUs.cards.card1.body}
					</TextContent>
				</TextContainer>
			</CardStyled>
			<CardStyled alignSelf='flex-start'>
				<ImgContainer url={svg2} />
				<TextContainer width='800px'>
					<Title>{data.whyUs.cards.card2.title}</Title>
					<TextContent width='80%'>
						{data.whyUs.cards.card2.body}
					</TextContent>
				</TextContainer>
			</CardStyled>
			<CardStyled alignSelf='center'>
				<ImgContainer url={svg3} />
				<TextContainer width='500px'>
					<Title>{data.whyUs.cards.card3.title}</Title>
					<TextContent width='90%'>
						{data.whyUs.cards.card3.body}
					</TextContent>
				</TextContainer>
			</CardStyled>
		</>
	);
}

export default Cards;
