import styled from "styled-components";

export const HeaderContainer = styled.div`
	height: 100vh;
	width: 100%;
	background-color: #524ef8;
	color: #fff;
	font-family: "Roboto", sans-serif;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const InfoContainer = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	padding: 30px;
`;

export const Title = styled.h2`
	margin-bottom: 30px;
	font-size: 50px;
`;

export const Subtitle = styled.h3`
	font-size: 30px;
`;

export const ImgContainer = styled.div`
	flex: 1;
`;
