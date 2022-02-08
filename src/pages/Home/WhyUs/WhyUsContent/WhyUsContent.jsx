import React from "react";
import {
	ImgContainer,
	Section,
	TextContainer,
	TextContent,
	Title,
} from "./WhyUsContentStyled";

function WhyUsContent() {
	return (
		<>
			<Section alignSelf='flex-end'>
				<ImgContainer url='https://picsum.photos/200/200'></ImgContainer>
				<TextContainer>
					<Title>Trust Driven.</Title>
					<TextContent>
						We gain your trust with actions over promises
					</TextContent>
				</TextContainer>
			</Section>
			<Section alignSelf='flex-start'>
				<ImgContainer url='https://picsum.photos/200/200'></ImgContainer>
				<TextContainer>
					<Title>Low and transparent fees.</Title>
					<TextContent>
						We believe that referrals for a job well done is our
						biggest compliment. No string attached.
					</TextContent>
				</TextContainer>
			</Section>
			<Section alignSelf='center'>
				<ImgContainer url='https://picsum.photos/200/200'></ImgContainer>
				<TextContainer>
					<Title>Flexible</Title>
					<TextContent>
						Not one culture is the same. We develop a flexible plan
						for your individual growth goals.
					</TextContent>
				</TextContainer>
			</Section>
		</>
	);
}

export default WhyUsContent;
