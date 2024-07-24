import React, { FC, ReactElement } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "sonda.core.shared.components";
import { i18nextInstance, initOptions, LocaleProvider } from "sonda.core.localization";
import { AppProvider } from "sonda.core.controls/providers";
import { Card, PageContent, TitleSection } from "sonda.core.controls/layout";
import { Button, DataTable, IconButton, RutField } from "sonda.core.controls";
import "./styles.css";

i18nextInstance.init(initOptions);

const Home: FC = (props: any): ReactElement => {
	const columnsTable: any[] = [
		{
			align: "center",
			dataIndex: "rut",
			dataType: "string",
			sorter: "string",
			title: "Rut afiliado",
		},
		{
			align: "center",
			customFormat: "DD/MM/YYYY",
			dataIndex: "dateSimulation",
			dataType: "date",
			sorter: "date",
			title: "Fecha de simulación",
		},
		{
			align: "center",
			dataIndex: "type",
			dataType: "string",
			sorter: "string",
			title: "Tipo",
		},
		{
			align: "center",
			dataIndex: "state",
			dataType: "string",
			sorter: "string",
			title: "Estado",
		},
		{
			title: "Comprobante",
			dataIndex: "voucher",
			align: "center",
			render: () => (
				<div className="sonda_column-with-buttons">
					<IconButton
						variant="primary"
						icon={["fas", "download"]}
						onClick={() => {
							alert("download");
						}}
					/>
				</div>
			),
		},
	];

	const dataTable: any[] = [
		{
			rut: "12345678-9",
			dateSimulation: new Date(),
			type: "Retiro pensionado",
			state: "Rechazada",
		},
	];

	return (
		<div>
			<Router>
				<Provider store={props.store}>
					<AppProvider globalEventDistributor={props.globalEventDistributor} idModule="">
						<LocaleProvider
							i18nextInstance={i18nextInstance}
							namespace="namespace.simulacion-beneficio-consulta"
						>
							<PageContent>
								<TitleSection title="Consulta De Simulaciones" />
								<Card>
									<form
										onSubmit={(e) => {
											e.preventDefault();
										}}
										className="home-form"
									>
										<RutField
											label="RUT Afiliado"
											name="rut"
											validateRUT={(_cleanRut, _formatedValue, _isValid) => {
												return false;
											}}
											rangeDigits={{
												max: 8,
												min: 7,
											}}
											separator="-"
											placeholder="12345678-9"
										/>
										<Button
											type="submit"
											buttonType="Buscar"
											id="Buscar"
											label="Buscar"
											className="form__button"
										/>
									</form>
									<DataTable columns={columnsTable} dataSource={dataTable} pagination={false} />
								</Card>
								<ToastContainer />
							</PageContent>
						</LocaleProvider>
					</AppProvider>
				</Provider>
			</Router>
		</div>
	);
};

export default Home;
