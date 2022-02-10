import { useContext, useState } from "react";
import { LanguageContext } from "../../../../../Context/LanguageContext";

import {
	CardStyled,
	ImgContainer,
	TextContainer,
	TextContent,
	Title,
} from "./CardsStyled";

function Cards() {
	const { data } = useContext(LanguageContext);
	const ArrayOfWhyUs = Object.entries(data.whyUs.cards);

	const [returnData] = useState([loop()]);

	function loop() {
		let arr = [];
		for (let i = 0; i < ArrayOfWhyUs.length; i++) {
			arr.push(
				<CardStyled key={`cardWhy${i}`}>
					<ImgContainer url='https://picsum.photos/200/200' />
					<TextContainer>
						<Title>{ArrayOfWhyUs[i][1].title}</Title>
						<TextContent>{ArrayOfWhyUs[i][1].body}</TextContent>
					</TextContainer>
				</CardStyled>
			);
		}
		return arr;
	}

	return (
		<>
			{console.log("RENDER WHY US CARDS")}

			{returnData}
		</>
	);
}

export default Cards;
