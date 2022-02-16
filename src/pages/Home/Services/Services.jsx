import {
	ButtonStyled,
	ServicesContainer,
	TitleContainer,
	TitleStyled,
} from "./ServicesStyled";

import { useContext } from "react";

import { LanguageContext } from "../../../Context/LanguageContext";

import CardsContainer from "./CardsContainer/CardsContainer";

function Services() {
	const { data } = useContext(LanguageContext);

	return (
		<ServicesContainer id='services'>
			<TitleContainer>
				<TitleStyled>{data.services.title}</TitleStyled>
				<TitleStyled>{data.services.subTitle}</TitleStyled>
			</TitleContainer>
			<CardsContainer />
			<ButtonStyled href='https://calendly.com/simplifyhr/intro-call'>
				{data.services.button}
			</ButtonStyled>
		</ServicesContainer>
	);
}

export default Services;
