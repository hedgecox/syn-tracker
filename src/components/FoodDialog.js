import React, { useState, useEffect } from "react";
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle, RadioGroup, FormControlLabel, Radio } from "@material-ui/core";
import { connect } from "react-redux";
import { v4 } from "uuid";
import { CloseFoodDialog, LogFood } from "../redux/actions";

const FoodDialog = ({ CloseFoodDialog, FoodDialog, LogFood }) => {
	const today = new Date().toISOString().substr(0, 10);
	const [date, setDate] = useState(today);
	const [food, setFood] = useState("");
	const [syns, setSyns] = useState("");
	const [type, setType] = useState("Syns");

	useEffect(() => {
		if (FoodDialog.open) {
			setDate(new Date().toISOString().substr(0, 10));
			setFood("");
			setSyns("");
			setType("Syns");
		}
	}, [FoodDialog]);

	return (
		<Dialog open={FoodDialog.open} onClose={CloseFoodDialog}>
			<DialogTitle>Log Food</DialogTitle>
			<DialogContent>
				<TextField label="Date" type="date" fullWidth value={date} onChange={(e) => setDate(e.target.value)} />
				<TextField label="Food" type="text" fullWidth autoFocus value={food} onChange={(e) => setFood(e.target.value)} />
				<RadioGroup aria-label="gender" name="gender1" value={type} onChange={(e) => setType(e.target.value)}>
					<FormControlLabel value="A" control={<Radio />} label="🧀 Hex A" />
					<FormControlLabel value="B" control={<Radio />} label="🥖 Hex B" />
					<FormControlLabel value="Syns" control={<Radio />} label="Syns" />
				</RadioGroup>
				{type === "Syns" && <TextField label="Syns" type="number" fullWidth value={syns} onChange={(e) => setSyns(e.target.value)} />}
			</DialogContent>
			<DialogActions>
				<Button color="primary" onClick={CloseFoodDialog}>
					Cancel
				</Button>
				<Button color="primary" onClick={() => LogFood({ date: new Date(date), food, syns: type === "Syns" ? syns : 0, id: v4(), type })}>
					Log
				</Button>
			</DialogActions>
		</Dialog>
	);
};

const mapStateToProps = (state) => {
	return {
		FoodDialog: state.FoodDialog,
	};
};

export default connect(mapStateToProps, { CloseFoodDialog, LogFood })(FoodDialog);
