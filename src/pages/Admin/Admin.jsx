import {
	BookmarkBorderOutlined,
	EmailOutlined,
	FileUploadOutlined,
} from "@mui/icons-material";
import React, { useState } from "react";
import BlogPostScreen from "../Login/BlogPostScreen/BlogPostScreen";
import { Container, MainContainer, Menu, MenuLink } from "./AdminStyles";
import EditPosts from "./EditPosts/EditPosts";
import Messages from "./Messages/Messages";

const Admin = () => {
	const [show, setShow] = useState("Messages");
	return (
		<Container>
			<Menu>
				<MenuLink
					onClick={() => {
						setShow("CreatePost");
					}}
				>
					<FileUploadOutlined /> Crear post 
				</MenuLink>
				<MenuLink
					onClick={() => {
						setShow("ViewPosts");
					}}
				>
					<BookmarkBorderOutlined /> Mis post
				</MenuLink>
				<MenuLink
					onClick={() => {
						setShow("Messages");
					}}
				>
					<EmailOutlined /> Mensajes
				</MenuLink>
			</Menu>
			<MainContainer>
				{show === "CreatePost" && <BlogPostScreen />}
				{show === "ViewPosts" && <EditPosts />}
				{show === "Messages" && <Messages />}
			</MainContainer>
		</Container>
	);
};

export default Admin;
