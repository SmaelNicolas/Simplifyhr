import styled from "styled-components";

export const CardStyled = styled.section`
	width: 450px;
	display: flex;
	flex-direction: row;
	align-self: ${({ alignSelf }) => alignSelf || "none"};
	gap: 15px;

	:nth-child(1) {
		align-self: flex-end;
	}
	:nth-child(2) {
		align-self: flex-start;
	}
	:nth-child(3) {
		align-self: center;

		margin-left: 100px;
	}
`;

export const ImgContainer = styled.div`
	width: 100px;
	height: 100px;
	background-image: url(${({ url }) => url});
	background-size: contain;
	background-repeat: no-repeat;
	background-position: center;
`;

export const TextContainer = styled.div`
	width: 470px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const Title = styled.span`
	width: 100%;
	text-align: start;
	font-size: 20px;
	font-weight: bold;
`;
export const TextContent = styled.span`
	width: 100%;
	text-align: start;
`;
