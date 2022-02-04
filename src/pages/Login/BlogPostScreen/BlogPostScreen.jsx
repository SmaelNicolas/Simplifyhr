import React from "react";
import { FormBlog } from "./BlogPostScreenStyled";
import FormBlogItems from "./FormBlogItems/FormBlogItems";

function BlogPostScreen() {
	return (
		<FormBlog method='post'>
			<FormBlogItems></FormBlogItems>
		</FormBlog>
	);
}

export default BlogPostScreen;
