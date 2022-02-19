import {
	BookmarkBorderOutlined,
	EmailOutlined,
	FileUploadOutlined,
} from "@mui/icons-material";
import React, { useContext, useState } from "react";
import { IsLoggedContext } from "../../Context/isLoggedContext";
import BlogPostScreen from "../Login/BlogPostScreen/BlogPostScreen";
import { Container, MainContainer, Menu, MenuLink } from "./AdminStyles";
import EditPosts from "./EditPosts/EditPosts";
import Messages from "./Messages/Messages";

const Admin = () => {
	const [show, setShow] = useState("Messages");
	const { logOutLS } = useContext(IsLoggedContext);
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
				<MenuLink onClick={logOutLS}>
					<EmailOutlined /> Log Out
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
