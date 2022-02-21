import { FiberManualRecord } from "@mui/icons-material";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardContainer = styled.div`
	height: auto;
	max-height: 500px;
	width: 300px;
	display: flex;
	flex-direction: column;
	box-shadow: 0px 4px 8px rgba(150, 150, 150, 0.24);
	border-radius: 10px;
	margin: 30px;

	@media screen and (max-width: 769px) {
		margin: 30px 0;
	}
`;
export const Image = styled.img`
	width: 300px;
	height: 300px;
	border-top-left-radius: 10px;
	border-top-right-radius: 10px;
`;
export const Info = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: auto;
`;
export const Title = styled.p`
	font-weight: 600;
	font-size: 16px;
	letter-spacing: 0.5px;
	overflow: hidden;
	margin-bottom: 10px;
`;

export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;
export const Button = styled(Link)`
	border-radius: 20px;
	background-color: var(--secondColor);
	border: none;
	cursor: pointer;
	text-decoration: none;
	color: #fff;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 12px;
	font-weight: 600;
	padding: 5px 10px;
	transition: all 0.3s ease-in-out;

	&:hover {
		transform: scale(1.03);
	}
	font-family: var(--montserratFont);
`;

export const Dot = styled.div`
	margin: 0 30px;
	height: 0.5em;
	width: 0.5em;
	background-color: #000;
	border-radius: 50%;
`;

export const DateString = styled.p`
	font-size: 12px;
`;
