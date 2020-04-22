import React, { useState } from "react";
import { Fab, LinearProgress, Button, Table, TableBody, TableCell, TableContainer, TableRow, Paper } from "@material-ui/core";
import { Add, ArrowBack, ArrowForward } from "@material-ui/icons";
import { connect } from "react-redux";
import FoodDialog from "./FoodDialog";
import moment from "moment";

import { OpenFoodDialog } from "../redux/actions";

const FoodLog = ({ OpenFoodDialog, Foods }) => {
	const today = moment();
	const [date, setDate] = useState(today);
	const startWeek = moment(date).startOf("isoWeek");
	const endWeek = moment(date).endOf("isoWeek");
	let mapDateHeaders = null; //used to flag when the date changes

	const dateHeaders = (d, arr) => {
		mapDateHeaders = d;
		const daySyns = arr
			.filter((i) => new Date(i.date).getDate() === new Date(d).getDate())
			.reduce((acc, el) => acc + (parseInt(el.syns) || 0), 0);
		const daySynsPercent = (daySyns / 15) * 100;

		return (
			<>
				<TableRow>
					<TableCell colSpan={2} className="dateHeader">
						{moment(d).format("Do MMM")} - {daySyns} Syns
						<LinearProgress
							value={daySynsPercent > 100 ? 100 : daySynsPercent}
							variant="determinate"
							color={daySynsPercent > 100 ? "secondary" : "primary"}
						/>
					</TableCell>
				</TableRow>
			</>
		);
	};

	return (
		<>
			<h1>Food Log</h1>
			<div className="weekDates">
				<Button onClick={() => setDate((d) => moment(d).subtract(1, "week"))}>
					<ArrowBack />
				</Button>
				{startWeek.format("Do MMM")} - {endWeek.format("Do MMM YYYY")}
				<Button onClick={() => setDate((d) => moment(d).add(1, "week"))} disabled={moment(today).isoWeek() <= moment(date).isoWeek()}>
					<ArrowForward />
				</Button>
			</div>

			<TableContainer component={Paper} style={{ marginBottom: "65px" }}>
				<Table>
					<TableBody>
						{Foods.filter((i) => moment(i.date).isBetween(startWeek, endWeek)).map((i, index, arr) => {
							return (
								<React.Fragment key={index}>
									{new Date(mapDateHeaders)?.getDate() !== new Date(i.date).getDate() && dateHeaders(i.date, arr)}
									<TableRow>
										<TableCell>{i.food}</TableCell>
										<TableCell>{i.syns}</TableCell>
									</TableRow>
								</React.Fragment>
							);
						})}
					</TableBody>
				</Table>
			</TableContainer>

			<Fab color="primary" aria-label="add" className="addBtn" onClick={OpenFoodDialog}>
				<Add />
			</Fab>
			<FoodDialog />
		</>
	);
};

const mapStateToProps = (state) => {
	return {
		Foods: state.Foods,
	};
};

export default connect(mapStateToProps, { OpenFoodDialog })(FoodLog);
