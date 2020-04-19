import React, { useState } from "react";
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogTitle } from "@material-ui/core";
import { connect } from "react-redux";
import { CloseFoodDialog, LogFood } from "../redux/actions";

const FoodDialog = ({ CloseFoodDialog, FoodDialog, LogFood }) => {
    const today = new Date().toISOString().substr(0, 10);
    const [date, setDate] = useState(today);
    const [food, setFood] = useState("");
    const [syns, setSyns] = useState("");

    return (
        <Dialog open={FoodDialog.open}>
            <DialogTitle>Log Food</DialogTitle>
            <DialogContent>
                <TextField label="Date" type="date" fullWidth value={date} onChange={(e) => setDate(e.target.value)} />
                <TextField label="Food" type="text" fullWidth autoFocus value={food} onChange={(e) => setFood(e.target.value)} />
                <TextField label="Syns" type="number" fullWidth value={syns} onChange={(e) => setSyns(e.target.value)} />
            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={CloseFoodDialog}>
                    Cancel
                </Button>
                <Button color="primary" onClick={() => LogFood({ date: new Date(date), food, syns })}>
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
