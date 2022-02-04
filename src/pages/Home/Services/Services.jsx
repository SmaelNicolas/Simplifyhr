import {
	ServicesContainer,
	TitleContainer,
	TitleStyled,
} from "./ServicesStyled";

import Cards from "./Cards/Cards";

function Services() {
	return (
		<ServicesContainer>
			<TitleContainer>
				<TitleStyled color='#524ef8'>
					StartUp up is in our DNA
				</TitleStyled>
				<TitleStyled color='#524ef8'>
					All Services on Succes
				</TitleStyled>
			</TitleContainer>
			<Cards></Cards>
		</ServicesContainer>
	);
}

export default Services;
