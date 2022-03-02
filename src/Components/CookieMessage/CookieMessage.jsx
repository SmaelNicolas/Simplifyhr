import React, { useContext } from "react";
import CookieConsent from "react-cookie-consent";
import { LanguageContext } from "../../Context/LanguageContext";

function CookieMessage() {
	const { data } = useContext(LanguageContext);

	return (
		<CookieConsent
			location='bottom'
			buttonText='ACCEPT'
			cookieName='Cookies'
			style={{ background: "#2b373b6f", textAlign: "center" }}
			buttonStyle={{
				background: `#524EF8`,
				fontSize: "13px",
				color: "white",
				borderRadius: "40px",
			}}
			expires={150}
		>
			{data.cookieMsg}
		</CookieConsent>
	);
}
export default CookieMessage;
