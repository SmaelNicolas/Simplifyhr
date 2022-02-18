import { KeyboardArrowDownRounded, KeyboardArrowUpRounded, LanguageOutlined } from "@mui/icons-material";
import { useContext, useState } from "react";
import { LanguageContext } from "../../../Context/LanguageContext";
import { LanguageDropdown, LanguageOption, LanguageTitle, LanguageWrapper } from "./LanguagueButtonStyle";


const LanguageButton = () => {
  const { setLanguage, language } = useContext(LanguageContext);
	const [dropdown, setDropdown] = useState(false);

	return (
		<LanguageWrapper onClick={() => setDropdown(!dropdown)} active={dropdown}>
			<LanguageTitle >
				<LanguageOutlined /> {language}
				{dropdown ? <KeyboardArrowUpRounded /> : <KeyboardArrowDownRounded />}
			</LanguageTitle>
			<LanguageDropdown>
				<LanguageOption onClick={() => setLanguage("Español")}>
					Español
				</LanguageOption>
				<LanguageOption onClick={() => setLanguage("English")}>
					English
				</LanguageOption>
			</LanguageDropdown>
		</LanguageWrapper>
	);
};

export default LanguageButton;
