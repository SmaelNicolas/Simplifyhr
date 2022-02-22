import { useContext } from "react";
import { LanguageContext } from "../../../../../Context/LanguageContext";
import {
	CardStyled,
	CardTitleStyled,
	CardTextStyled,
	CardTextContainerStyled,
	CardSubTextContainerStyled,
} from "./CardStyled";

function Cards() {
	const { data } = useContext(LanguageContext);
	console.log(data);

	return (
		<>
			<CardStyled>
				<CardTitleStyled>
					{data.services.cards.card1.title}
				</CardTitleStyled>
				<CardTextStyled>
					<CardTextContainerStyled>
						{data.services.cards.card1.body}
					</CardTextContainerStyled>
					<CardSubTextContainerStyled>
						{data.services.cards.card1.subBody}
					</CardSubTextContainerStyled>
				</CardTextStyled>
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
			</CardStyled>
			<CardStyled>
				<CardTitleStyled>
					{data.services.cards.card3.title}
				</CardTitleStyled>
				<CardTextStyled>
					<CardTextContainerStyled fSize='20px'>
						{data.services.cards.card3.body}
					</CardTextContainerStyled>
				</CardTextStyled>
			</CardStyled>
		</>
	);
}

export default Cards;
