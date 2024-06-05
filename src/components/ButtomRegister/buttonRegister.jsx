import React from 'react';
import Button from 'react-bootstrap/Button';

function ButtomReg() {
	const handleCadastro = () => {
		// Pegar os dados do formulário (implemente a lógica para obter os valores dos inputs)
		const nome = document.getElementById('Nome').value;
		const email = document.getElementById('E-mail').value;
		const planeta = planetaSelecionado;
		const lote = document.getElementById('Lote').value;
		const pais = document.getElementById('País').value;
		const estado = document.getElementById('Estado').value;
		const cidade = document.getElementById('Cidade').value;
		const endereco = document.getElementById('Endereco').value;
		const cep = document.getElementById('CEP').value;
		// ... (pegar outros dados do formulário)

		// Criar um novo objeto com os dados do formulário
		const novoCard = {
			nome,
			email,
			planeta,
			lote,
			pais,
			estado,
			cidade,
			endereco,
			cep,
			
		};

		// Adicionar o novo objeto ao array de dados
		setDadosCards([...dadosCards, novoCard]);
		onCadastro(novoCard);
	};
	return (
		<Button variant="primary" type="submit">
			Cadastrar
		</Button>

	);
}

export default ButtomReg;
