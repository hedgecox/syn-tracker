import { combineReducers } from "redux";

const Weights = (state = [], action) => {
	switch (action.type) {
		case "LOG_WEIGHT":
			console.log("log weight");
			return [action.payload, ...state].sort((a, b) => b.date - a.date);
		default:
			return state;
	}
};

const Foods = (state = [], action) => {
	switch (action.type) {
		case "LOG_FOOD":
			return [action.payload, ...state].sort((a, b) => b.date - a.date);
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
		case "LOG_FOOD":
		case "CLOSE_FOOD_DIALOG":
			return { open: false };
		default:
			return state;
	}
};

export default combineReducers({ Weights, WeightDialog, FoodDialog, Foods });
