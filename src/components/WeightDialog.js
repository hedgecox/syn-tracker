import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import { v4 } from "uuid";
import { CloseWeightDialog, LogWeight } from "../redux/actions";

const WeightDialog = ({ WeightDialog, CloseWeightDialog, LogWeight }) => {
	const today = new Date().toISOString().substr(0, 10);
	const [date, setDate] = useState(today);
	const [weight, setWeight] = useState("");
	const [bodyFat, setBodyFat] = useState("");

	useEffect(() => {
		if (WeightDialog.open) {
			setDate(new Date().toISOString().substr(0, 10));
			setWeight("");
			setBodyFat("");
		}
	}, [WeightDialog]);

	return (
		<Dialog open={WeightDialog.open}>
			<DialogTitle>Log Weight</DialogTitle>
			<DialogContent>
				<TextField label="Date" type="date" fullWidth value={date} onChange={(e) => setDate(e.target.value)} />
				<TextField label="Weight" type="text" fullWidth value={weight} autoFocus onChange={(e) => setWeight(e.target.value)} />
				<TextField label="Body Fat %" type="number" fullWidth value={bodyFat} onChange={(e) => setBodyFat(e.target.value)} />
			</DialogContent>
			<DialogActions>
				<Button color="primary" onClick={CloseWeightDialog}>
					Cancel
				</Button>
				<Button color="primary" onClick={() => LogWeight({ date: new Date(date), weight, bodyFat, id: v4() })}>
					Log
				</Button>
			</DialogActions>
		</Dialog>
	);
};

const mapStateToProps = (state) => {
	return {
		WeightDialog: state.WeightDialog,
	};
};

export default connect(mapStateToProps, { CloseWeightDialog, LogWeight })(WeightDialog);
