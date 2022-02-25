import {
	BookmarkBorderOutlined,
	EmailOutlined,
	FileUploadOutlined,
	Google,
	Logout,
} from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { IsLoggedContext } from "../../Context/isLoggedContext";
import { LanguageContext } from "../../Context/LanguageContext";
import BlogPostScreen from "../Login/BlogPostScreen/BlogPostScreen";
import { Container, MainContainer, Menu, MenuLink } from "./AdminStyles";
import EditPosts from "./EditPosts/EditPosts";
import GoogleAnalitycs from "./GoogleAnalitycs/GoogleAnalitics";
import Messages from "./Messages/Messages";

const Admin = () => {
	const [show, setShow] = useState("Messages");
	const { logOutLS } = useContext(IsLoggedContext);
	const { data } = useContext(LanguageContext);
	return (
		<>
			<Helmet>
				<title>Simplify-hr / Admin Panel</title>
				<meta name='description' content={data.description} />
				<link rel='canonical' href='' />
			</Helmet>
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
					<MenuLink
						onClick={() => {
							setShow("GA");
						}}
					>
						<Google />
						Google Analitycs
					</MenuLink>
					<MenuLink onClick={logOutLS}>
						<Logout /> Log Out
					</MenuLink>
				</Menu>
				<MainContainer>
					{show === "CreatePost" && <BlogPostScreen />}
					{show === "ViewPosts" && <EditPosts />}
					{show === "Messages" && <Messages />}
					{show === "GA" && <GoogleAnalitycs />}
				</MainContainer>
			</Container>
		</>
	);
};

export default Admin;
