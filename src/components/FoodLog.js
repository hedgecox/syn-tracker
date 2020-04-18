import React from "react";
import { Fab } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { connect } from "react-redux";
import FoodDialog from "./FoodDialog";

import { OpenFoodDialog } from "../redux/actions";

const FoodLog = ({ OpenFoodDialog }) => {
    return (
        <>
            <h1>Food Log</h1>
            <Fab color="primary" aria-label="add" className="addBtn" onClick={OpenFoodDialog}>
                <Add />
            </Fab>

            <FoodDialog />
        </>
    );
};

export default connect(null, { OpenFoodDialog })(FoodLog);
