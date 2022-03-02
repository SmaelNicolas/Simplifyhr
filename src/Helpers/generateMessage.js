import { v4 as uuidv4 } from "uuid";
import database from "../Firebase/Firebase";
import { doc, setDoc } from "firebase/firestore";

function generateMessage(name, email, company, body, setShowSucces) {
	fetch("https://formsubmit.co/ajax/hello@hr-simplify.com", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify({
			Name: name,
			Email: email,
			Company: company,
			Message: body,
		}),
	}).then((response) => response.json());

	const message = {
		date: "" + new Date(),
		person: {
			name: name,
			email: email,
			company: company,
		},
		message: body,
	};
	setDoc(doc(database, "messages", uuidv4()), message);
	setShowSucces(true);
}
export default generateMessage;
