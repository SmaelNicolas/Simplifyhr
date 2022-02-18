import { collection, getDocs } from "firebase/firestore";
import database from "../Firebase/Firebase";

async function getUsers(setUsers) {
	const usersCollection = collection(database, "users");
	const userDocs = await getDocs(usersCollection);
	const userDocsListed = userDocs.docs.map((doc) => doc.data());
	setUsers(userDocsListed);
}
export default getUsers;
