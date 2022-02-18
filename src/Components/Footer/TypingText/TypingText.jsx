import { useEffect, useState } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { RoughEase } from "gsap/EasePack";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin, RoughEase);

const Text = styled.span``;

const TypingText = ({ data }) => {
	const [array, setArray] = useState(data.footer.subtitles);
  let masterTL = gsap.timeline({repeat:-1});

	useEffect(() => {
		const cursor = document.querySelector("#footerCursor");
		const text = document.querySelector("#footerText");

		gsap.to(cursor, { opacity: 0, ease: "power2.inOut", repeat: -1 });

	
		array.forEach((subt) => {
      let tl = gsap.timeline({repeat:1, yoyo:true, repeatDelay: 1 })
      .to(text, { duration: 1, text: subt });
      masterTL.add(tl)
		});
	}, []);

	return <Text id="footerText"></Text>;
};

export default TypingText;
