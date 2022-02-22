import styled from "styled-components";

export const CardStyled = styled.section`
	max-width: 1200px;
	margin: ${({ margin }) => margin || "0px"};

	display: flex;
	flex-direction: row;
	align-self: ${({ alignSelf }) => alignSelf || "none"};
	gap: 15px;

	@media (max-width: 1089px) {
		width: 95%;
		margin: 0px;
		align-self: center;
	}
	@media (max-width: 330px) {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
`;

export const ImgContainer = styled.div`
	width: 150px;
	height: 150px;
	background-image: url(${({ url }) => `${url}`});
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
	border-radius: 10px;
`;

export const TextContainer = styled.div`
	max-width: ${({ width }) => width};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;

	@media (max-width: 1089px) {
		width: 87%;
	}
`;

export const Title = styled.span`
	width: 100%;
	text-align: start;
	font-size: 24px;
	font-weight: 700;
	@media (max-width: 1089px) {
		font-size: 20px;
	}

	@media (max-width: 380px) {
		font-size: 18px;
	}
`;
export const TextContent = styled.span`
	width: ${({ width }) => width || "80%"};

	font-size: 18px;
	text-align: start;
	font-weight: 500;

	@media (max-width: 1089px) {
		font-size: 15px;
	}
`;
