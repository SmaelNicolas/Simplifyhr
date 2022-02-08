import {
	CardsContainerStyled,
	CardTitleStyled,
	CardStyled,
	CardTextStyled,
	CardTextContainerStyled,
	CardButtonStyled,
} from "./CardsStyled";

import { useContext } from "react";
import { LanguageContext } from "../../../../Context/LanguageContext";

function Cards() {
	const { data } = useContext(LanguageContext);

	return (
		<CardsContainerStyled>
			<CardStyled>
				<CardTitleStyled>
					{data.services.cards.card1.title}
				</CardTitleStyled>
				<CardTextStyled>
					<CardTextContainerStyled width='90%'>
						{data.services.cards.card1.body}
					</CardTextContainerStyled>
				</CardTextStyled>
				<CardButtonStyled href='https://calendly.com/simplifyhr/intro-call'>
					{data.services.cards.card1.button}
				</CardButtonStyled>
			</CardStyled>
			<CardStyled>
				<CardTitleStyled>
					{data.services.cards.card2.title}
				</CardTitleStyled>
				<CardTextStyled>
					<CardTextContainerStyled>
						{data.services.cards.card2.body}
					</CardTextContainerStyled>
				</CardTextStyled>
				<CardButtonStyled href='https://calendly.com/simplifyhr/intro-call'>
					{data.services.cards.card2.button}
				</CardButtonStyled>
			</CardStyled>
			<CardStyled>
				<CardTitleStyled>
					{data.services.cards.card3.title}
				</CardTitleStyled>
				<CardTextStyled>
					<CardTextContainerStyled width='80%'>
						{data.services.cards.card3.body}
					</CardTextContainerStyled>
				</CardTextStyled>
				<CardButtonStyled href='https://calendly.com/simplifyhr/intro-call'>
					{data.services.cards.card3.button}
				</CardButtonStyled>
			</CardStyled>
		</CardsContainerStyled>
	);
}

export default Cards;
