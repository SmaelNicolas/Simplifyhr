import styled from "styled-components";

export const ImageContainer = styled.div`
	width: 350px;
	height: 445px;
	background-image: url(${({ url }) => `${url}`});
	position: absolute;
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
	left: 0px;
	bottom: 45px;
	overflow-x: hidden;
`;
