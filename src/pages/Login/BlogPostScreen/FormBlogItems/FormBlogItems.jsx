import { useState } from "react";

import {
	Labels,
	InputPostContent,
	Inputs,
	Submit,
	InputContainer,
	BodyContainer,
} from "./FormBlogItemsStyled";

import database from "../../../../Firebase/Firebase";
import { doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";
import SuccessMessage from "../../../../Components/SuccessMessage/SuccesMessage";
import ErrorMessage from "../../../../Components/ErrorMessage/ErrorMessage";

function FormBlogItems() {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [imgUrl, setImgUrl] = useState("");
	const [readTime, setReadTime] = useState("");
	const [author, setAuthor] = useState("");
	const [showError, setShowError] = useState(false);
	const [showSuccess, setShowSucces] = useState(false);

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

		setDoc(doc(database, "blogPostsEnglish", uuidv4()), post);
		setShowSucces(true);
	}

	function checkForm() {
		if (
			title === "" ||
			body === "" ||
			imgUrl === "" ||
			readTime === "" ||
			author === ""
		) {
			setShowError(true);
		} else {
			generateBlogPost();
		}
	}

	const changeValueSuccessMessage = () => {
		setShowSucces(!showSuccess);
	};

	const changeValueErrorMessage = () => {
		setShowError(!showError);
	};

	return showSuccess ? (
		<SuccessMessage
			click={changeValueSuccessMessage}
			message='Post Created'
		/>
	) : showError ? (
		<ErrorMessage
			click={changeValueErrorMessage}
			message='Complete All Fields'
		/>
	) : (
		<>
			<InputContainer>
				<Labels htmlFor='postTitle'>Title </Labels>

				<Inputs
					type='text'
					id='postTitle'
					name='postTitle'
					placeholder='Post Title'
					required
					onChange={(e) => setTitle(e.target.value)}
				/>

				<Labels htmlFor='urlImage'>Url Image </Labels>

				<Inputs
					type='text'
					id='urlImage'
					name='urlImage'
					placeholder='Image Url'
					required
					onChange={(e) => setImgUrl(e.target.value)}
				/>

				<Labels htmlFor='lectureTime'>Read Time </Labels>

				<Inputs
					type='text'
					id='readTime'
					name='readTime'
					placeholder='Read Time'
					required
					onChange={(e) => setReadTime(e.target.value)}
				/>

				<Labels htmlFor='author'>Author </Labels>

				<Inputs
					type='text'
					id='author'
					name='author'
					placeholder='Author'
					required
					onChange={(e) => setAuthor(e.target.value)}
				/>
			</InputContainer>

			<BodyContainer>
				<Labels htmlFor='postContent'>Body </Labels>

				<InputPostContent
					type='text'
					id='postContent'
					name='postContent'
					placeholder='Write something..'
					required
					onChange={(e) => setBody(e.target.value)}
				/>

				<Submit
					onClick={(e) => {
						e.preventDefault();
						checkForm(e);
					}}
					type='submit'
				>
					Create Post
				</Submit>
			</BodyContainer>
		</>
	);
}

export default FormBlogItems;
