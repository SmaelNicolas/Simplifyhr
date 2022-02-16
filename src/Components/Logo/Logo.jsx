import { NavHashLink } from "react-router-hash-link";
import styled from "styled-components";

const Title = styled(NavHashLink)`
	cursor: pointer;
	text-decoration: none;
	color: #fff;
	font-size: 2em;
	font-weight: 600;
`;

const Logo = () => {
	return <Title to={`/#home`}>Simplify-hr</Title>;
};

export default Logo;
