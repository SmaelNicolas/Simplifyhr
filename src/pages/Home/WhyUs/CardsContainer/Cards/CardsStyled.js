import styled from "styled-components";

export const CardStyled = styled.section`
	width: auto;
	display: flex;
	flex-direction: row;
	align-self: ${({ alignSelf }) => alignSelf || "none"};
	gap: 15px;
`;

export const ImgContainer = styled.div`
	width: 200px;
	height: 200px;
	background-image: url(${({ url }) => `${url}`});
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
`;

export const TextContainer = styled.div`
	width: ${({ width }) => width};
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Title = styled.span`
	width: 100%;
	text-align: start;
	font-size: 26px;
	font-weight: 700;
`;
export const TextContent = styled.span`
	width: 100%;
	font-size: 22px;
	text-align: start;
	font-weight: 500;
`;
