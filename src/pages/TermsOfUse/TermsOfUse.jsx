import { useContext } from "react";
import { Helmet } from "react-helmet-async";

import { LanguageContext } from "../../Context/LanguageContext";
import {
	PPContainer,
	PPTitle,
	TitleStyled,
	SubTitleStyled,
	ParagraphStyled,
} from "./TermsOfUseStyled";

function TermsOfUse() {
	const { data } = useContext(LanguageContext);

	return (
		<>
			<Helmet>
				<title>Simplify-hr / Terms of Use</title>
				<meta name='description' content={data.description} />
				<link rel='canonical' href='' />
			</Helmet>
			<PPContainer id='termsOfUse'>
				<PPTitle>{data.termsOfUse.title}</PPTitle>
				<TitleStyled>{data.termsOfUse.items[1].title}</TitleStyled>
				<ParagraphStyled>
					{data.termsOfUse.items[1].paragraph[1]}
				</ParagraphStyled>
				<ParagraphStyled>
					{data.termsOfUse.items[1].paragraph[2]}
				</ParagraphStyled>
				<ParagraphStyled>
					{data.termsOfUse.items[1].paragraph[3]}
				</ParagraphStyled>
				<TitleStyled>{data.termsOfUse.items[2].title}</TitleStyled>
				<ParagraphStyled>
					{data.termsOfUse.items[2].paragraph[1]}
				</ParagraphStyled>
				<ParagraphStyled>
					{data.termsOfUse.items[2].paragraph[2]}
				</ParagraphStyled>
				<ParagraphStyled>
					{data.termsOfUse.items[2].paragraph[3]}
				</ParagraphStyled>
				<TitleStyled>{data.termsOfUse.items[3].title}</TitleStyled>
				<ParagraphStyled>
					{data.termsOfUse.items[3].paragraph[1]}
				</ParagraphStyled>
				<ParagraphStyled>
					{data.termsOfUse.items[3].paragraph[2]}
				</ParagraphStyled>
				<TitleStyled>{data.termsOfUse.items[4].title}</TitleStyled>
				<SubTitleStyled>
					{data.termsOfUse.items[4].sections[1].subTitle}
				</SubTitleStyled>
				<ParagraphStyled>
					{data.termsOfUse.items[4].sections[1].paragraph[1]}
				</ParagraphStyled>
				<ParagraphStyled>
					{data.termsOfUse.items[4].sections[1].paragraph[2]}
				</ParagraphStyled>
				<SubTitleStyled>
					{data.termsOfUse.items[4].sections[2].subTitle}
				</SubTitleStyled>
				<ParagraphStyled>
					{data.termsOfUse.items[4].sections[2].paragraph[1]}
				</ParagraphStyled>
				<ParagraphStyled>
					{data.termsOfUse.items[4].sections[2].paragraph[2]}
				</ParagraphStyled>
				<ParagraphStyled>
					{data.termsOfUse.items[4].sections[2].paragraph[3]}
				</ParagraphStyled>
				<ParagraphStyled>
					{data.termsOfUse.items[4].sections[2].paragraph[4]}
				</ParagraphStyled>
				<TitleStyled>{data.termsOfUse.items[5].title}</TitleStyled>
				<SubTitleStyled>
					{data.termsOfUse.items[5].subTitles[1]}
				</SubTitleStyled>
				<ParagraphStyled>
					{data.termsOfUse.items[5].paragraph[1]}
				</ParagraphStyled>
				<SubTitleStyled>
					{data.termsOfUse.items[5].subTitles[2]}
				</SubTitleStyled>
				<ParagraphStyled>
					{data.termsOfUse.items[5].paragraph[2]}
				</ParagraphStyled>
				<SubTitleStyled>
					{data.termsOfUse.items[5].subTitles[3]}
				</SubTitleStyled>
				<ParagraphStyled>
					{data.termsOfUse.items[5].paragraph[3]}
				</ParagraphStyled>
				<SubTitleStyled>
					{data.termsOfUse.items[5].subTitles[4]}
				</SubTitleStyled>
				<ParagraphStyled>
					{data.termsOfUse.items[5].paragraph[4]}
				</ParagraphStyled>
				<ParagraphStyled>
					{data.termsOfUse.items[5].paragraph[5]}
				</ParagraphStyled>
				<ParagraphStyled>
					{data.termsOfUse.items[5].paragraph[6]}
				</ParagraphStyled>
				<TitleStyled>{data.termsOfUse.items[6].title}</TitleStyled>
				<ParagraphStyled>
					{data.termsOfUse.items[6].paragraph[1]}
				</ParagraphStyled>
				<ParagraphStyled>
					{data.termsOfUse.items[6].paragraph[2]}
				</ParagraphStyled>
				<ParagraphStyled>
					{data.termsOfUse.items[6].paragraph[3]}
				</ParagraphStyled>
				<TitleStyled>{data.termsOfUse.items[7].title}</TitleStyled>
				<ParagraphStyled>
					{data.termsOfUse.items[7].paragraph}
				</ParagraphStyled>
			</PPContainer>
		</>
	);
}

export default TermsOfUse;
