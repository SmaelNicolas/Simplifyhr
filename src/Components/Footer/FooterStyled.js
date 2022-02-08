import styled from "styled-components";

export const FooterContainer = styled.div`
	width: 100%;
	height: 30vh;
	background-color: #524ef8;
	display: flex;
	justify-content: space-between;
	align-items: center;
	color: #fff;
	font-family: "Roboto", sans-serif;
`;

export const Left = styled.div`
	flex: 2;
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const Logo = styled.h4`
	font-size: 30px;
`;

export const Email = styled.a`
	cursor: pointer;
	font-size: 20px;
	text-decoration: none;
	color: #fff;
`;

export const Right = styled.div`
	flex: 1;
	padding: 20px;
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
`;

export const FooterLink = styled.span``;
