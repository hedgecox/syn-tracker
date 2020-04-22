import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Fab } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { connect } from "react-redux";
import WeightDialog from "./WeightDialog";
import { OpenWeightDialog } from "../redux/actions";

const WeightLog = ({ Weights, OpenWeightDialog }) => {
	return (
		<>
			<h1>Weight Log</h1>
			<TableContainer component={Paper} style={{ marginBottom: "65px" }}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>Date</TableCell>
							<TableCell>Weight</TableCell>
							<TableCell>BodyFat %</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{Weights.map((weight, ind) => {
							return (
								<TableRow key={ind}>
									<TableCell>{weight.date.toLocaleString().substring(0, 10)}</TableCell>
									<TableCell>{weight.weight}</TableCell>
									<TableCell>{weight.bodyFat}%</TableCell>
								</TableRow>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>

			<Fab color="primary" aria-label="add" className="addBtn" onClick={OpenWeightDialog}>
				<Add />
			</Fab>

			<WeightDialog />
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		Weights: state.Weights,
	};
};

export default connect(mapStateToProps, { OpenWeightDialog })(WeightLog);
