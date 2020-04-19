import React from "react";
import { Fab, LinearProgress } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { connect } from "react-redux";
import FoodDialog from "./FoodDialog";
import moment from "moment";

import { OpenFoodDialog } from "../redux/actions";

const FoodLog = ({ OpenFoodDialog, Foods }) => {
    return (
        <>
            <h1>Food Log</h1>
            Current Week: {moment().isoWeek()}
            <LinearProgress value={20} variant="determinate" />
            {Foods.map((i) => {
                return (
                    <p>
                        <p>Week: {moment(i.date).isoWeek().toString()}</p>
                        {i.food} - Syns: {i.syns}
                    </p>
                );
            })}
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
