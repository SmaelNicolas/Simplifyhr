import { doc, setDoc } from "firebase/firestore";
import database from "../Firebase/Firebase";
import { v4 as uuidv4 } from "uuid";

function generateBlogPost(
	title,
	body,
	author,
	readTime,
	imgUrl,
	setShowSucces
) {
	const post = {
		date: new Date().getTime(),
		stringDate: "" + new Date(),
		title: title,
		body: body,
		author: author,
		readTime: readTime,
		imgUrl: imgUrl,
	};

	setDoc(doc(database, "blogPostsEnglish", uuidv4()), post);
	setShowSucces(true);
}

export default generateBlogPost;
