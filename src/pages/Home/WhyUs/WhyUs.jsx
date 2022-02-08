import WhyUsContent from "./WhyUsContent/WhyUsContent";

import {
	Section,
	TitleStyled,
	SubtitleStyled,
	ButtonStyled,
	ContentContainer,
} from "./WhyUsStyled";

import { useContext } from "react";
import { LanguageContext } from "../../../Context/LanguageContext";

function WhyUs() {
	const { data } = useContext(LanguageContext);

	return (
		<Section id='whyus'>
			<TitleStyled color='#524ef8'>{data.whyUs.title}</TitleStyled>
			<SubtitleStyled>{data.whyUs.subTitle}</SubtitleStyled>
			<ContentContainer>
				<WhyUsContent></WhyUsContent>
			</ContentContainer>
			<ButtonStyled href='https://calendly.com/simplifyhr/intro-call'>
				{data.whyUs.button}
			</ButtonStyled>
		</Section>
	);
}

export default WhyUs;
