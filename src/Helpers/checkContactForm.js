import generateMessage from "./generateMessage";

function checkForm(name, email, company, body, setShowSucces, setShowError) {
	if (
		name === "" ||
		company === "" ||
		email === "" ||
		body === "" ||
		body === undefined ||
		email.includes("@") === false ||
		email.includes(".com") === false
	) {
		setShowError(true);
	} else {
		generateMessage(name, email, company, body, setShowSucces);
	}
}
export default checkForm;
