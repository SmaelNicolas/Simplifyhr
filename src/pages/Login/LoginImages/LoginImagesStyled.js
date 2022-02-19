import styled from "styled-components";

export const ImageContainer = styled.div`
	width: 550px;
	height: 500px;
	background-image: url(${({ url }) => `${url}`});
	position: absolute;
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
	left: -80px;
	overflow-x: hidden;

	@media (max-width: 650px) {
		width: 350px;
		bottom: 45px;
		left: 0px;
	}
`;
