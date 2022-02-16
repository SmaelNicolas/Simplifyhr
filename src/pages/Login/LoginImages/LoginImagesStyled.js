import styled from "styled-components";

export const ImageContainer = styled.div`
	width: 550px;
	height: 645px;
	background-image: url(${({ url }) => `${url}`});
	position: absolute;
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
	left: -20px;
	overflow-x: hidden;

	@media (max-width: 650px) {
		width: 350px;
		height: 445px;
		bottom: 45px;
	}
`;
