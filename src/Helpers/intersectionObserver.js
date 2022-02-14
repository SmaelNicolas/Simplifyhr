const obsInit = () => {
	const cards = document.querySelectorAll(".cards");
	const first = cards[0];
	const second = cards[1];
	const third = cards[2];

	const customObserver = (element, className) => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					entry.target.classList.toggle(
						`${className}`,
						entry.isIntersecting
					);
				});
			},
			{ threshold: 0.75 }
		);
		observer.observe(element);
	};

	customObserver(first, "showFirst");
	customObserver(second, "showCenter");
	customObserver(third, "showThird");
};

export default obsInit;
