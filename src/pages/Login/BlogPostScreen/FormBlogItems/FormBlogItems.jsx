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

function FormBlogItems() {
	const [title, setTitle] = useState();
	const [body, setBody] = useState();
	const [imgUrl, setImgUrl] = useState();
	const [readTime, setReadTime] = useState();
	const [author, setAuthor] = useState();

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
	}

	return (
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
						generateBlogPost();
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
