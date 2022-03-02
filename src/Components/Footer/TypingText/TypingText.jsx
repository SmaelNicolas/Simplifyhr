import { useEffect, useState } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { RoughEase } from "gsap/EasePack";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin, RoughEase);

const Text = styled.span``;

const TypingText = ({ data }) => {
	const [array, setArray] = useState(data.footer.subtitles);
	let master = gsap.timeline({ repeat: -1 });

	useEffect(() => {
		const cursor = document.querySelector("#footerCursor");
		const text = document.querySelector("#footerText");

		gsap.to(cursor, { opacity: 0, ease: "power2.inOut", repeat: -1 });

		array.forEach((subt) => {
			let time = gsap
				.timeline({ repeat: 1, yoyo: true, repeatDelay: 2 })
				.to(text, { duration: 2, text: subt });
			master.add(time);
		});
	}, []);

	return <Text id="footerText"></Text>;
};

export default TypingText;
