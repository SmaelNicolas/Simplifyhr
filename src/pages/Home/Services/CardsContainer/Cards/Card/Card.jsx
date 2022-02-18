import React from "react";
import {
	CardStyled,
	CardTitleStyled,
	CardTextStyled,
	CardTextContainerStyled,
	CardSubTextContainerStyled,
} from "./CardStyled";

function Card({ title, body, subBody }) {
	return (
		<CardStyled>
			<CardTitleStyled>{title}</CardTitleStyled>
			<CardTextStyled>
				<CardTextContainerStyled>{body}</CardTextContainerStyled>
				{subBody ? (
					<CardSubTextContainerStyled>
						{subBody}
					</CardSubTextContainerStyled>
				) : undefined}
			</CardTextStyled>
		</CardStyled>
	);
}

export default Card;
