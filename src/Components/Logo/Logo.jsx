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
  font-family: var(--poppinsBoldFont);

	@media screen and (max-width: 945px) {
		font-size: 1.2rem;
	}
`;


const Logo = () => {
	return (
		<LogoContainer>
			<Title smooth to={`/#home`}>
				Simplify-hr
			</Title>
		</LogoContainer>
	);
};

export default Logo;
