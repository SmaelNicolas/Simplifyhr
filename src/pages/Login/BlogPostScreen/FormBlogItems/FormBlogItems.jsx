import { useState } from "react";

import {
	Labels,
	LanguageContainer,
	RadioInputs,
	RadioLabel,
	InputPostContent,
	Inputs,
	Submit,
} from "./FormBlogItemsStyled";

import database from "../../../../Firebase/Firebase";
import { doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

function FormBlogItems() {
	const [title, setTitle] = useState();
	const [body, setBody] = useState();
	const [imgUrl, setImgUrl] = useState();
	const [readTime, setReadTime] = useState();
	const [author, setAuthor] = useState();
	const [language, setLanguage] = useState(true);

	function generateBlogPost() {
		const post = {
			date: new Date().getTime(),
			stringDate: "" + new Date(),
			title: title,
			body: body,
			author: author,
			readTime: readTime,
			imgUrl: imgUrl,
		};

		// Add a new document in collection "blogPostEnglish" "blogPostSpanish"
		language
			? setDoc(doc(database, "blogPostsEnglish", uuidv4()), post)
			: setDoc(doc(database, "blogPostsSpanish", uuidv4()), post);
	}

	return (
		<>
			<Labels htmlFor="postTitle">Language </Labels>
			<LanguageContainer>
				<RadioInputs
					type="radio"
					id="language1"
					name="language"
					value="english"
					defaultChecked={true}
					onChange={() => {
						setLanguage(!language);
					}}
				/>
				<RadioLabel htmlFor="contactChoice1">English</RadioLabel>

				<RadioInputs
					type="radio"
					id="language2"
					name="language"
					value="español"
					defaultChecked={false}
					onChange={() => {
						setLanguage(!language);
					}}
				/>
				<RadioLabel htmlFor="contactChoice2">Español</RadioLabel>
			</LanguageContainer>

			<Labels htmlFor="postTitle">Title </Labels>

			<Inputs
				type="text"
				id="postTitle"
				name="postTitle"
				placeholder="Post Title"
				required
				onChange={(e) => setTitle(e.target.value)}
			></Inputs>

			<Labels htmlFor="urlImage">Url Image </Labels>

			<Inputs
				type="text"
				id="urlImage"
				name="urlImage"
				placeholder="Image Url"
				required
				onChange={(e) => setImgUrl(e.target.value)}
			></Inputs>

			<Labels htmlFor="lectureTime">Read Time </Labels>

			<Inputs
				type="text"
				id="readTime"
				name="readTime"
				placeholder="Read Time"
				required
				onChange={(e) => setReadTime(e.target.value)}
			></Inputs>

			<Labels htmlFor="author">Author </Labels>

			<Inputs
				type="text"
				id="author"
				name="author"
				placeholder="Author"
				required
				onChange={(e) => setAuthor(e.target.value)}
			></Inputs>

			<Labels htmlFor="postContent">Body </Labels>

			<InputPostContent
				type="text"
				id="postContent"
				name="postContent"
				placeholder="Write something.."
				required
				onChange={(e) => setBody(e.target.value)}
			></InputPostContent>

			<Submit
				onClick={(e) => {
					e.preventDefault();
					generateBlogPost();
				}}
				type="submit"
			>
				Create Post
			</Submit>
		</>
	);
}

export default FormBlogItems;
