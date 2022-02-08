import { getDocs } from "firebase/firestore";

export const getPosts = (collection) => {
	return new Promise((resolve, reject) => {
		getDocs(collection)
			.then((res) => {
				const results = res.docs.map((doc) => {
					return { ...doc.data(), id: doc.id };
				});
				resolve(results);
			})
			.catch((err) => {
				console.log(err);
			});
	});
};
