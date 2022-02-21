import React from "react";
import Cards from "./Cards/Cards";
import { CardsContainerStyled } from "./CardsContainerStyled";

function CardsContainer() {
	return (
		<CardsContainerStyled id='cardContainerServices'>
			<Cards />
		</CardsContainerStyled>
	);
}

export default CardsContainer;
