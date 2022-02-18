import {useEffect} from 'react'
import { LoadingContainer, Title, Subtitle } from "./LoadingScreenStyled";
import { gsap } from "gsap";
import { RoughEase } from "gsap/EasePack";
import { TextPlugin } from "gsap/TextPlugin";



function LoadingScreen() {
  let masterTL = gsap.timeline();

	useEffect(() => {
		const title = document.querySelector("#loadingTitle");
		const subtitle = document.querySelector("#loadingSubtitle");

    masterTL.to(title, {duration:2, text: "Simplify-hr"})
    .to(subtitle, {duration:1, y: '-10%', ease: 'power4.inOut'})
	}, []);
	return (
		<LoadingContainer>
			<Title id="loadingTitle"></Title>
      <Subtitle><span id="loadingSubtitle">Startup and growth experts</span></Subtitle>
		</LoadingContainer>
	);
}

export default LoadingScreen;
