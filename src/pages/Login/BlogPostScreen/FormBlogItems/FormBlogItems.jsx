import { useContext, useState } from "react";

import {
	Labels,
	InputPostContent,
	Inputs,
	Submit,
	InputContainer,
	BodyContainer,
} from "./FormBlogItemsStyled";

import SuccessMessage from "../../../../Components/SuccessMessage/SuccesMessage";
import ErrorMessage from "../../../../Components/ErrorMessage/ErrorMessage";
import { LanguageContext } from "../../../../Context/LanguageContext";
import checkForm from "../../../../Helpers/checkBlogForm";
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';

function FormBlogItems() {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const [imgUrl, setImgUrl] = useState("");
	const [readTime, setReadTime] = useState("");
	const [author, setAuthor] = useState("");
	const [showError, setShowError] = useState(false);
	const [showSuccess, setShowSucces] = useState(false);

	const { data } = useContext(LanguageContext);

  const { quill, quillRef } = useQuill();


	const changeValueSuccessMessage = () => {
		setShowSucces(!showSuccess);
	};

	const changeValueErrorMessage = () => {
		setShowError(!showError);
	};

	const checking = () => {
		checkForm(
			title,
			body,
			imgUrl,
			readTime,
			author,
			setShowSucces,
			setShowError
		);
	};
 
	return showSuccess ? (
		<SuccessMessage
			click={changeValueSuccessMessage}
			message={data.successMessage.createPost}
		/>
	) : showError ? (
		<ErrorMessage
			click={changeValueErrorMessage}
			message={data.errorMessage.createPost}
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
          ref={quillRef}
					onInput={(e) => setBody(quill.container.firstChild.innerHTML)}
				/>

				<Submit
					onClick={(e) => {
						e.preventDefault();
						checking();
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
