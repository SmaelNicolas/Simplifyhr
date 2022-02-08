import { useContext } from "react";
import { LanguageContext } from "../../../Context/LanguageContext";
import {
	HeaderContainer,
	ImgContainer,
	InfoContainer,
	Subtitle,
	Title,
} from "./HeaderStyle";

const Header = () => {
	const { data } = useContext(LanguageContext);
	console.log(data);

	return (
		<HeaderContainer>
			<InfoContainer>
				<Title>{data.header.title}</Title>
				<Subtitle>{data.header.subTitle}</Subtitle>
			</InfoContainer>
			<ImgContainer></ImgContainer>
		</HeaderContainer>
	);
};

export default Header;
