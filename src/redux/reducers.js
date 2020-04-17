import { combineReducers } from "redux";

const Weights = (
    state = [
        { date: "Today", weight: "10 st 8" },
        { date: "10th June", weight: "10 st 8" },
    ],
    action
) => {
    return state;
};

export default combineReducers({ Weights });
