
import React, { useState } from 'react';
import { Form, FormGroup, FormLabel, FormControl, FormSelect, Row, Col } from 'react-bootstrap';
import ButtomReg from '../ButtomRegister/buttonRegister';
import Accordion from 'react-bootstrap/Accordion';

function FormRegister() {
	// Definindo o estado inicial
	const [planetaSelecionado, setPlanetSelected] = useState(''); // Estado para o planeta selecionado
	const [mostrarCamposTerra, setShowFieldsTerra] = useState(false); // Estado para mostrar campos Terra
	const [mostrarCamposMarte, setShowFieldsMarte] = useState(false); // Estado para mostrar campos Marte
	const [dataForm, setDataForm] = useState({
		nome: '',
		email: '',
		planeta: '',
		lote: '',
		pais: '',
		estado: '',
		endereço: '',
		CEP: '',
	});

	const handleChangeValue = (event) => {
		const { name, value } = event.target;
		setDataForm((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	// Função para lidar com a mudança do planeta
	const handlePlanetChange = (event) => {
		handleChangeValue(event);
		setPlanetSelected(event.target.value);
		hideInputs(event.target.value);
	};

	const hideInputs = (value) => {
		if (value === 'terra') {
			setShowFieldsTerra(true);
			setShowFieldsMarte(false); // Esconde campos Marte
		} else if (value === 'marte') {
			setShowFieldsTerra(false);
			setShowFieldsMarte(true); // Exibe campos Marte
		} else {
			setShowFieldsTerra(false);
			setShowFieldsMarte(false); // Esconde ambos os campos
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		setPlanetSelected("");
		hideInputs("");
		setDataForm({
			nome: '',
			email: '',
			planeta: '',
			lote: '',
			pais: '',
			estado: '',
			endereço: '',
			CEP: '',
		});
		console.log(dataForm);
	};



	return (
		<Accordion>
			<Accordion.Item eventKey="0">
				<Accordion.Header>Cadastre-se aqui</Accordion.Header>
				<Accordion.Body>
					<Form onSubmit={handleSubmit}>
						{/* Campos Nome e Email em uma linha */}
						<Row>
							<Col sm={4}>
								<FormGroup>
									<FormLabel>Nome</FormLabel>
									<FormControl
										value={dataForm.nome}
										type="text"
										placeholder="Digite seu nome completo"
										name="nome"
										onChange={handleChangeValue} />
								</FormGroup>
							</Col>

							<Col sm={4}>
								<FormGroup>
									<FormLabel>Email</FormLabel>
									<FormControl
										value={dataForm.email}
										type="email"
										placeholder="Digite seu email"
										name="email"
										onChange={handleChangeValue} />
								</FormGroup>
							</Col>
						</Row>

						{/* Campo Planeta em uma linha */}
						<Row>
							<Col sm={8}>
								<FormGroup>
									<FormLabel>Planeta</FormLabel>
									<FormSelect
										value={planetaSelecionado}
										name="planeta"
										onChange={handlePlanetChange}>
										<option value="">Selecione o Planeta</option>
										<option value="terra">Terra</option>
										<option value="marte">Marte</option>
									</FormSelect>
								</FormGroup>
							</Col>
						</Row>

						{/* Campos Terra em várias linhas */}
						{mostrarCamposTerra && (
							<Row>
								<Col sm={4}>
									<FormGroup>
										<FormLabel>País</FormLabel>
										<FormControl
											value={dataForm.pais}
											type="text"
											placeholder="Digite seu país"
											name="pais"
											onChange={handleChangeValue} />
									</FormGroup>
								</Col>

								<Col sm={4}>
									<FormGroup>
										<FormLabel>Estado</FormLabel>
										<FormControl
											value={dataForm.estado}
											type="text"
											placeholder="Digite seu estado"
											name="estado"
											onChange={handleChangeValue} />
									</FormGroup>
								</Col>
							</Row>
						)}

						{mostrarCamposTerra && (
							<Row>
								<Col sm={4}>
									<FormGroup>
										<FormLabel>Endereço</FormLabel>
										<FormControl
											value={dataForm.endereço}
											type="text"
											placeholder="Digite seu endereço"
											name="endereço"
											onChange={handleChangeValue} />
									</FormGroup>
								</Col>

								<Col sm={4}>
									<FormGroup>
										<FormLabel>CEP</FormLabel>
										<FormControl
											value={dataForm.CEP}
											type="text"
											placeholder="Digite seu CEP"
											name="CEP"
											onChange={handleChangeValue} />
									</FormGroup>
								</Col>
							</Row>
						)}

						{/* Campo Marte em uma linha */}
						{mostrarCamposMarte && (
							<Row>
								<Col sm={8}>
									<FormGroup>
										<FormLabel>Lote (4 dígitos)</FormLabel>
										<FormControl
											value={dataForm.lote}
											type="text"
											placeholder="Digite o número do lote"
											name="lote"
											maxLength={4}
											onChange={handleChangeValue} />
									</FormGroup>
								</Col>
							</Row>
						)}

						{/* Botão em uma linha */}
						<Row>
							<Col>
								<ButtomReg />
							</Col>
						</Row>
					</Form>
				</Accordion.Body>
			</Accordion.Item>
		</Accordion>
	);
}

export default FormRegister;
