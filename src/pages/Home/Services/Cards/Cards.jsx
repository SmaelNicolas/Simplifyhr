import {
	CardsContainerStyled,
	CardTitleStyled,
	CardStyled,
	CardTextStyled,
	CardTextContainerStyled,
	CardButtonStyled,
} from "./CardsStyled";

function Cards() {
	return (
		<CardsContainerStyled>
			<CardStyled>
				<CardTitleStyled>Essential</CardTitleStyled>
				<CardTextStyled>
					<CardTextContainerStyled>
						Fin your C-levels to grow your team
					</CardTextContainerStyled>
				</CardTextStyled>
				<CardButtonStyled href='https://calendly.com/simplifyhr/intro-call'>
					5% GYS
				</CardButtonStyled>
			</CardStyled>
			<CardStyled>
				<CardTitleStyled>Express</CardTitleStyled>
				<CardTextStyled>
					<CardTextContainerStyled>
						Need an urgent hire? We can also match. Fast.
					</CardTextContainerStyled>
				</CardTextStyled>
				<CardButtonStyled href='https://calendly.com/simplifyhr/intro-call'>
					Book a call
				</CardButtonStyled>
			</CardStyled>
			<CardStyled>
				<CardTitleStyled>Custom</CardTitleStyled>
				<CardTextStyled>
					<CardTextContainerStyled>
						Have a one-time hr project?
					</CardTextContainerStyled>
				</CardTextStyled>
				<CardButtonStyled href='https://calendly.com/simplifyhr/intro-call'>
					Book a call
				</CardButtonStyled>
			</CardStyled>
		</CardsContainerStyled>
	);
}

export default Cards;
