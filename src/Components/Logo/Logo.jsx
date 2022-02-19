import { HashLink } from "react-router-hash-link";
import styled from "styled-components";

const LogoContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
`;

const Title = styled(HashLink)`
	text-decoration: none;
	color: #fff;
	font-weight: 600;
	font-size: 2rem;

	@media screen and (max-width: 945px) {
		font-size: 1.2rem;
	}
`;

const Subtitle = styled.span`
	text-decoration: none;
	color: #fff;
	font-weight: 200;
	font-size: 0.8rem;
	border: 1px solid #fff;
	padding: 2px 7px;
	margin: 5px 0;
	font-family: var(--dmsansFont);
	@media screen and (max-width: 945px) {
		font-size: 0.5rem;
	}
`;

const Logo = () => {
	return (
		<LogoContainer>
			<Title smooth to={`/#home`}>
				Simplify-hr
			</Title>
			<Subtitle>Startup and growth experts</Subtitle>
		</LogoContainer>
	);
};

export default Logo;
