import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
	min-height: 100vh;
`;

export const Row = styled.div`
	width: 100%;
	margin: 10px 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-start;
	box-shadow: 1px 1px 2px 0px rgba(158, 154, 154, 0.77);
	border-radius: 10px;
	padding: 10px;
	font-size: 14px;
`;

export const Date = styled.div`
	margin: 5px 0;
`;

export const Name = styled.div`
	margin: 5px 0;
`;

export const Company = styled.div`
	margin: 5px 0;
`;

export const Email = styled.div`
	margin: 5px 0;
`;

export const Body = styled.div`
	margin: 5px 0;
`;

export const Button = styled.a`
	text-decoration: none;
	margin: 20px 0;
	background-color: #7c72ce;
	padding: 8px 20px;
	border-radius: 14px;
	color: #fff;
	cursor: pointer;
	transition: all 0.3s ease-in-out;

	&:hover {
		transform: scale(1.03);
	}
	font-family: var(--montserratFont);
`;
