import React, { useEffect } from "react";

function GoogleAnalitycs() {
	useEffect(() => {
		window.location.href =
			"https://analytics.google.com/analytics/web/?authuser=0#/p302459197/realtime/overview?params=_u..nav%3Dmaui&collectionId=app";
	}, []);

	return (
		<div>
			<h2>Redirigiendo a Google Analitycs</h2>
		</div>
	);
}

export default GoogleAnalitycs;
