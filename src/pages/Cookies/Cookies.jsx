import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { LanguageContext } from "../../Context/LanguageContext";
import {
	PPContainer,
	PPTitle,
	ParagraphStyled,
	PPLinkStyled,
} from "./CookiesStyles";

function Cookies() {
	const { data } = useContext(LanguageContext);

	return (
		<>
			<Helmet>
				<title>Simplify-hr / Cookies</title>
				<meta name='description' content={data.description} />
				<link rel='canonical' href='' />
			</Helmet>
			<PPContainer id='Cookies'>
				<PPTitle>{data.cookies.title}</PPTitle>
				<ParagraphStyled>{data.cookies.paragraph[1]}</ParagraphStyled>
				<ParagraphStyled>{data.cookies.paragraph[2]}</ParagraphStyled>
				<ParagraphStyled>{data.cookies.paragraph[3]}</ParagraphStyled>
				<ParagraphStyled>{data.cookies.paragraph[4]}</ParagraphStyled>
				<ParagraphStyled>
					{data.cookies.paragraph[5].items.i1}
				</ParagraphStyled>
				<PPLinkStyled>
					{data.cookies.paragraph[5].links.i1}
				</PPLinkStyled>
				<ParagraphStyled>
					{data.cookies.paragraph[5].items.i2}
				</ParagraphStyled>
				<PPLinkStyled>
					{data.cookies.paragraph[5].links.i2}
				</PPLinkStyled>
				<ParagraphStyled>
					{data.cookies.paragraph[5].items.i3}
				</ParagraphStyled>
				<PPLinkStyled>
					{data.cookies.paragraph[5].links.i3}
				</PPLinkStyled>
				<ParagraphStyled>
					{data.cookies.paragraph[5].items.i4}
				</ParagraphStyled>
				<PPLinkStyled>
					{data.cookies.paragraph[5].links.i4}
				</PPLinkStyled>
				<ParagraphStyled>
					{data.cookies.paragraph[5].items.i5}
				</ParagraphStyled>
				<PPLinkStyled>
					{data.cookies.paragraph[5].links.i5}
				</PPLinkStyled>
				<ParagraphStyled>{data.cookies.paragraph[6]}</ParagraphStyled>
			</PPContainer>
		</>
	);
}

export default Cookies;
