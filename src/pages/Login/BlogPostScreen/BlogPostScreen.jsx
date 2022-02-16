import React from "react";
import { TitleStyled } from "../LoginStyled";
import { FormBlog } from "./BlogPostScreenStyled";
import FormBlogItems from "./FormBlogItems/FormBlogItems";

function BlogPostScreen() {
	return (
		<>
			<TitleStyled>CREATE BLOG POST</TitleStyled>
			<FormBlog method='post'>
				<FormBlogItems></FormBlogItems>
			</FormBlog>
		</>
	);
}

export default BlogPostScreen;
