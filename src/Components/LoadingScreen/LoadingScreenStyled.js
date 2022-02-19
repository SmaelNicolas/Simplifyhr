import styled from "styled-components";

export const LoadingContainer = styled.div`
	width: 100%;
	height: 120vh;
	background-color: #524ef8;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
  position: absolute;
  top: -80px;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
`;

export const Title = styled.h1`
	color: #fff;
  margin-bottom: 50px;
  font-size: 4rem;
  
  @media screen and (max-width: 945px){
    font-size: 3rem;
  }
`;

export const Subtitle = styled.span`
	color: #fff;
	font-weight: 200;
	font-size: 1.5rem;
	font-family: var(--dmsansFont);
	overflow: hidden;

	span {
		display: inline-block;
		transform: translateY(130%);
		border: 1px solid #fff;
		padding: 2px 7px;
		margin: 5px 0;
	}

  @media screen and (max-width: 945px){
    font-size: 1.2rem;
  }
`;
