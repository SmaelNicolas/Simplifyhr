import { useContext, useState } from "react";
import { LanguageContext } from "../../../../../Context/LanguageContext";
import Card from "./Card/Card";

function Cards() {
	const { data } = useContext(LanguageContext);
	const ArrayOfCards = Object.entries(data.services.cards);
	const [returnData] = useState([loop()]);

	function loop() {
		let arr = [];
		for (let i = 0; i < ArrayOfCards.length; i++) {
			ArrayOfCards[i][1].subBody !== undefined
				? arr.push(
						<Card
							title={ArrayOfCards[i][1].title}
							body={ArrayOfCards[i][1].body}
							subBody={ArrayOfCards[i][1].subBody}
						/>
				  )
				: arr.push(
						<Card
							title={ArrayOfCards[i][1].title}
							body={ArrayOfCards[i][1].body}
						/>
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
