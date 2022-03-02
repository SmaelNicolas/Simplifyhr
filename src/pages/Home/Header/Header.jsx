import { useContext } from "react";
import { LanguageContext } from "../../../Context/LanguageContext";
import AutoPlaySilentVideo from "../../../Helpers/AutoPLaySilentVideo";
import {
	Button,
	HeaderBg,
	HeaderContainer,
	ImgContainer,
	InfoContainer,
	Subtitle,
	Title,
} from "./HeaderStyle";

import { openInNewTab } from "../../../Helpers/openNewTab";

const Header = () => {
	const { data } = useContext(LanguageContext);

	return (
		<HeaderContainer id='home'>
			<HeaderBg>
				<AutoPlaySilentVideo
					video={`${process.env.PUBLIC_URL}/Assets/video.mp4`}
				/>
			</HeaderBg>
			<InfoContainer>
				<Title>{data.header.title}</Title>
				<Subtitle>{data.header.subTitle}</Subtitle>
			</InfoContainer>
			<ImgContainer>
				<Button
					onClick={() =>
						openInNewTab(
							"https://calendly.com/simplifyhr/intro-call"
						)
					}
				>
					{data.header.button}
				</Button>
			</ImgContainer>
		</HeaderContainer>
	);
};

export default Header;
