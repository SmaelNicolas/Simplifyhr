import {
	WhyUsContainer,
	TitleStyled,
	SubtitleStyled,
	ButtonStyled,
} from "./WhyUsStyled";

import CardsContainer from "./CardsContainer/CardsContainer";

import { useContext } from "react";
import { LanguageContext } from "../../../Context/LanguageContext";

function WhyUs() {
	const { data } = useContext(LanguageContext);

	return (
		<WhyUsContainer id='whyus'>
			<TitleStyled color='#524ef8'>{data.whyUs.title}</TitleStyled>
			<SubtitleStyled>{data.whyUs.subTitle}</SubtitleStyled>
			<CardsContainer>
				{console.log("RENDER WHY US CONTAINER CARDS")}
			</CardsContainer>
			<ButtonStyled href='https://calendly.com/simplifyhr/intro-call'>
				{data.whyUs.button}
			</ButtonStyled>
		</WhyUsContainer>
	);
}

export default WhyUs;
