import { combineReducers } from "redux";

const Weights = (state = [], action) => {
    switch (action.type) {
        case "LOG_WEIGHT":
            return [action.payload, ...state];
        default:
            return state;
    }
};

const WeightDialog = (state = { open: false }, action) => {
    switch (action.type) {
        case "OPEN_WEIGHT_DIALOG":
            return { open: true };
        case "LOG_WEIGHT":
        case "CLOSE_WEIGHT_DIALOG":
            return { open: false };
        default:
            return state;
    }
};

const FoodDialog = (state = { open: false }, action) => {
    switch (action.type) {
        case "OPEN_FOOD_DIALOG":
            return { open: true };
        case "CLOSE_FOOD_DIALOG":
            return { open: false };
        default:
            return state;
    }
};

export default combineReducers({ Weights, WeightDialog, FoodDialog });