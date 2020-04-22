import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Fab, Button } from "@material-ui/core";
import { Add, Delete } from "@material-ui/icons";
import { connect } from "react-redux";
import WeightDialog from "./WeightDialog";
import { OpenWeightDialog, DeleteWeight } from "../redux/actions";
import moment from "moment";

const WeightLog = ({ Weights, OpenWeightDialog, DeleteWeight }) => {
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
							<TableCell></TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{Weights.map((weight) => {
							return (
								<TableRow key={weight.id}>
									<TableCell>{moment(weight.date).format("Do MMM YYYY")}</TableCell>
									<TableCell>{weight.weight}</TableCell>
									<TableCell>{weight.bodyFat}%</TableCell>
									<TableCell className="removeItem">
										<Button
											onClick={() => {
												window.confirm("Are you sure you want to delete?") && DeleteWeight(weight.id);
											}}
										>
											<Delete />
										</Button>
									</TableCell>
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

export default connect(mapStateToProps, { OpenWeightDialog, DeleteWeight })(WeightLog);
