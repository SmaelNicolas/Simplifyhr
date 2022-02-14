import {
	CardTitleStyled,
	CardStyled,
	CardTextStyled,
	CardTextContainerStyled,
	CardButtonStyled,
} from "./CardsStyled";

import { useContext, useState } from "react";
import { LanguageContext } from "../../../../../Context/LanguageContext";

function Cards() {
	const { data } = useContext(LanguageContext);
	const ArrayOfCards = Object.entries(data.services.cards);
	const [returnData] = useState([loop()]);

	function loop() {
		let arr = [];
		for (let i = 0; i < ArrayOfCards.length; i++) {
			arr.push(
				<CardStyled className='cards'>
					<CardTitleStyled>
						{ArrayOfCards[i][1].title}
					</CardTitleStyled>
					<CardTextStyled>
						<CardTextContainerStyled>
							{ArrayOfCards[i][1].body}
						</CardTextContainerStyled>
					</CardTextStyled>
					<CardButtonStyled href='https://calendly.com/simplifyhr/intro-call'>
						{ArrayOfCards[i][1].button}
					</CardButtonStyled>
				</CardStyled>
			);
		}
		return arr;
	}

	return (
		<>
			{console.log("RENDER SERVICES CARDS")}

			{returnData}
		</>
	);
}

export default Cards;
