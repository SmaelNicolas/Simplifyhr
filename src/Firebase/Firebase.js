// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyAmboJSwnT164svu0OJ-H1VuQufjflRUrk",
	authDomain: "simplifyhr-41533.firebaseapp.com",
	projectId: "simplifyhr-41533",
	storageBucket: "simplifyhr-41533.appspot.com",
	messagingSenderId: "882731369136",
	appId: "1:882731369136:web:2bc49198299c35bf69b175",
	measurementId: "G-VWS5GPMDGT",
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);
export const analytics = getAnalytics(app);

//funcion para probar si recibe los datos
export async function getUsers() {
	const usersCollection = collection(database, "users");
	const userDocs = await getDocs(usersCollection);
	const userDocsListed = userDocs.docs.map((doc) => doc.data());
	console.log(userDocsListed);
}
