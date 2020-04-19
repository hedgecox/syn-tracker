import React from "react";
import { Fab } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { connect } from "react-redux";
import FoodDialog from "./FoodDialog";

import { OpenFoodDialog } from "../redux/actions";

const FoodLog = ({ OpenFoodDialog, Foods }) => {
    return (
        <>
            <h1>Food Log</h1>

            {Foods.map((i) => {
                return (
                    <p>
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
