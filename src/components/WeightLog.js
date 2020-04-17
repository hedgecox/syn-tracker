import React from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Fab,
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import { connect } from "react-redux";

const WeightLog = ({ Weights }) => {
    return (
        <>
            <h1>Weight Log</h1>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Date</TableCell>
                            <TableCell>Weight</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {Weights.map((weight) => {
                            return (
                                <TableRow>
                                    <TableCell>{weight.date}</TableCell>
                                    <TableCell>{weight.weight}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>

            <Fab
                color="primary"
                aria-label="add"
                style={{
                    position: "fixed",
                    right: "10px",
                    bottom: "65px",
                    zIndex: 10,
                }}
            >
                <Add />
            </Fab>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        Weights: state.Weights,
    };
};

export default connect(mapStateToProps)(WeightLog);
