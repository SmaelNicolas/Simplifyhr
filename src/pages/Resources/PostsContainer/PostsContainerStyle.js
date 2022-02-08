import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 30px;
`;

export const Wrapper = styled.div`
	width: 90%;
	min-height: 100vh;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	margin: auto;
`;

export const Button = styled.button`
	width: 208px;
	height: 51px;
	background-color: #524ef8;
	color: #fff;
	border-radius: 40px;
	border: none;
	cursor: pointer;
`;

export const Arrow = styled.img`
	width: 12px;
	height: 12px;
	margin-right: 20px;
`;
