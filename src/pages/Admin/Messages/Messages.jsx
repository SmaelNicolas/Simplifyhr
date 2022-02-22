import { collection } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { LanguageContext } from "../../../Context/LanguageContext";
import database from "../../../Firebase/Firebase";
import { getPosts } from "../../../Helpers/getPosts";
import {
	Body,
	Button,
	Company,
	Container,
	Date,
	Email,
	Name,
	Row,
} from "./MessagesStyles";

const Messages = () => {
	const [messages, setMessages] = useState([]);
	const { setLoading, loading } = useContext(LanguageContext);

	const messagesCollection = collection(database, "messages");

	useEffect(() => {
		getPosts(messagesCollection, setLoading, loading).then((resultado) => {
			const res = resultado;
			setMessages(res);
		});
		return () => {};
	}, []);
  
	return (
		<Container>
			{messages.map((m) => {
				return (
					<Row key={m.id}>
						<Date>{`Fecha: ${m.date.slice(0, 21)}`}</Date>
						<Name>{`Nombre: ${m.person.name}`}</Name>
						<Company>{`Compañia: ${m.person.company}`}</Company>
						<Email>{`Email: ${m.person.email}`}</Email>
						<Body>{`Mensaje: ${m.message}`}</Body>
						<Button href={`mailto: ${m.person.email}`}>
							Responder
						</Button>
					</Row>
				);
			})}
		</Container>
	);
};

export default Messages;
