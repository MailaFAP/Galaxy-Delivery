import React from 'react';
import Card from 'react-bootstrap/Card';
import ButtomEdit from '../ButtomEdit/buttomEdit';

function Cards({dados}) {
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Body>
				<Card.Title as="h4">{dados.nome}</Card.Title>
				<Card.Subtitle as="h5" className="mb-2 text-muted">{dados.planeta}</Card.Subtitle>
				<Card.Text>
				<p>{dados.endereco}</p>
				<p>Faça alterações do seu cadastro</p>

				</Card.Text>
				< ButtomEdit />
			</Card.Body>
		</Card>
	);
}

export default Cards;

