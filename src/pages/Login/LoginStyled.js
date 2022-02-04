import styled from "styled-components";

export const TitleStyled = styled.div`
	width: ${({ width }) => width || "100%"};
	height: ${({ height }) => height || "auto"};
	padding: ${({ padding }) => padding || "25px 0px"};
	color: ${({ color }) => color || "black"};
	background-color: ${({ backgroundColor }) => backgroundColor || "none"};
	font-size: ${({ fontSize }) => fontSize || "45px"};
	font-weight: ${({ fontWeight }) => fontWeight || "800"};
	letter-spacing: ${({ letterSpacing }) => letterSpacing || "0.4px"};
	text-align: ${({ textAlign }) => textAlign || "center"};
`;
