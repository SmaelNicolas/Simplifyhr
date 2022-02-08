import {
	ServicesContainer,
	TitleContainer,
	TitleStyled,
} from "./ServicesStyled";

import Cards from "./Cards/Cards";

function Services() {
	return (
		<ServicesContainer id="services">
			<TitleContainer>
				<TitleStyled>StartUp up is in our DNA</TitleStyled>
				<TitleStyled>All Services on Succes</TitleStyled>
			</TitleContainer>
			<Cards></Cards>
		</ServicesContainer>
	);
}

export default Services;
