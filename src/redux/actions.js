/* Weight Page */
export const OpenWeightDialog = () => {
	return {
		type: "OPEN_WEIGHT_DIALOG",
	};
};

export const CloseWeightDialog = () => {
	return {
		type: "CLOSE_WEIGHT_DIALOG",
	};
};

export const LogWeight = (payload) => {
	return {
		type: "LOG_WEIGHT",
		payload,
	};
};

export const DeleteWeight = (payload) => {
	return {
		type: "DELETE_WEIGHT",
		payload,
	};
};

/* Food Page */
export const OpenFoodDialog = () => {
	return {
		type: "OPEN_FOOD_DIALOG",
	};
};

export const CloseFoodDialog = () => {
	return {
		type: "CLOSE_FOOD_DIALOG",
	};
};

export const LogFood = (payload) => {
	return {
		type: "LOG_FOOD",
		payload,
	};
};

export const DeleteFood = (payload) => {
	return {
		type: "DELETE_FOOD",
		payload,
	};
};
