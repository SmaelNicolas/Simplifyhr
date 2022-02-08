import WhyUsContent from "./WhyUsContent/WhyUsContent";

import {
	Section,
	TitleStyled,
	SubtitleStyled,
	ButtonStyled,
	ContentContainer,
} from "./WhyUsStyled";

function WhyUs() {
	return (
		<Section id='whyus'>
			<TitleStyled color='#524ef8'>Why Simplify-hr</TitleStyled>
			<SubtitleStyled>
				We are obsessed with matching the best talen with their dream
				job.
			</SubtitleStyled>
			<ContentContainer>
				<WhyUsContent></WhyUsContent>
			</ContentContainer>
			<ButtonStyled href='https://calendly.com/simplifyhr/intro-call'>
				Schedule a video call
			</ButtonStyled>
		</Section>
	);
}

export default WhyUs;
