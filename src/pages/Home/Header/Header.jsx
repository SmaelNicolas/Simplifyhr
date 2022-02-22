import { useContext } from "react";
import { LanguageContext } from "../../../Context/LanguageContext";
import {
	Button,
	HeaderBg,
	HeaderContainer,
	HeaderVideo,
	ImgContainer,
	InfoContainer,
	Subtitle,
	Title,
} from "./HeaderStyle";

const Header = () => {
	const { data } = useContext(LanguageContext);

	return (
		<HeaderContainer id="home">
			<HeaderBg>
				<HeaderVideo
					autoPlay
					loop
					muted
					src={`${process.env.PUBLIC_URL}/Assets/video.mp4`}
					type="video/mp4"
				/>
			</HeaderBg>
			<InfoContainer>
				<Title>{data.header.title}</Title>
				<Subtitle>{data.header.subTitle}</Subtitle>
			</InfoContainer>
			<ImgContainer>
				<Button href="https://calendly.com/simplifyhr/intro-call">
					{data.header.button}
				</Button>
			</ImgContainer>
		</HeaderContainer>
	);
};

export default Header;
