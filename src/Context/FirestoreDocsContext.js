import { collection, deleteDoc, doc } from "firebase/firestore";
import { createContext, useContext, useEffect, useState } from "react";
import database from "../Firebase/Firebase";
import { getPosts } from "../Helpers/getPosts";
import { LanguageContext } from "./LanguageContext";

export const FirestoreDocsContext = createContext([]);

const FirestoreDocsContextProvider = ({ children }) => {
	const [posts, setPosts] = useState([]);
  const { setLoading, loading } = useContext(LanguageContext);

  const postsCollection = collection(database, "blogPostsEnglish");

	const deletePosts = async (id) => {
		await deleteDoc(doc(database, "blogPostsEnglish", id));
		refreshPosts();
	};

	const refreshPosts = () => {
		getPosts(postsCollection, setLoading, loading).then((resultado) => {
			const res = resultado;
			setPosts(res);
		});
	};

	useEffect(() => {
		refreshPosts();
		return () => {};
	}, []);

	

	return (
		<FirestoreDocsContext.Provider value={{ posts, deletePosts}}>
			{children}
		</FirestoreDocsContext.Provider>
	);
};

export default FirestoreDocsContextProvider;