import generateBlogPost from "./generateBlogPost";

function checkForm(
	title,
	body,
	imgUrl,
	readTime,
	author,
	setShowSucces,
	setShowError
) {
	if (
		title === "" ||
		body === "" ||
		imgUrl === "" ||
		readTime === "" ||
		author === ""
	) {
		setShowError(true);
	} else {
		generateBlogPost(title, body, author, readTime, imgUrl, setShowSucces);
	}
}

export default checkForm;
