import {
	WhyUsContainer,
	TitleStyled,
	SubtitleStyled,
	ButtonStyled,
	ButtonToTop,
} from "./WhyUsStyled";

import CardsContainer from "./CardsContainer/CardsContainer";

import { useContext } from "react";
import { LanguageContext } from "../../../Context/LanguageContext";

import arrotToTop from "../../../Assets/arrowTop.svg";

function WhyUs() {
	const { data } = useContext(LanguageContext);

	return (
		<WhyUsContainer id='whyus'>
			<TitleStyled>{data.whyUs.title}</TitleStyled>
			<SubtitleStyled>{data.whyUs.subTitle}</SubtitleStyled>
			<CardsContainer>
				{console.log("RENDER WHY US CONTAINER CARDS")}
			</CardsContainer>
			<ButtonStyled href='https://calendly.com/simplifyhr/intro-call'>
				{data.whyUs.button}
			</ButtonStyled>
			<ButtonToTop smooth to={`/#home`} url={arrotToTop}></ButtonToTop>
		</WhyUsContainer>
	);
}

export default WhyUs;
