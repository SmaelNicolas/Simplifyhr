import React from "react";
import {
	Labels,
	LanguageContainer,
	RadioInputs,
	RadioLabel,
	InputPostContent,
	Inputs,
	Submit,
} from "./FormBlogItemsStyled";

function FormBlogItems() {
	return (
		<>
			<Labels htmlFor='postTitle'>Language </Labels>
			<LanguageContainer>
				<RadioInputs
					type='radio'
					id='language1'
					name='language'
					value='english'
				/>
				<RadioLabel htmlFor='contactChoice1'>English</RadioLabel>

				<RadioInputs
					type='radio'
					id='language2'
					name='language'
					value='español'
				/>
				<RadioLabel htmlFor='contactChoice2'>Español</RadioLabel>
			</LanguageContainer>

			<Labels htmlFor='postTitle'>Title </Labels>

			<Inputs
				type='text'
				id='postTitle'
				name='postTitle'
				placeholder='Post Title'
				required
			></Inputs>
			<Labels htmlFor='postContent'>Content </Labels>

			<InputPostContent
				type='text'
				id='postContent'
				name='postContent'
				placeholder='Write something..'
				required
			></InputPostContent>
			<Submit
				onClick={(e) => {
					e.preventDefault();
					console.log("Post Created");
				}}
				type='submit'
			>
				Create Post
			</Submit>
		</>
	);
}

export default FormBlogItems;
