export const loadState = () => {
	try {
		const seralizedState = localStorage.getItem("state");
		if (seralizedState === null) {
			return undefined;
		}

		return JSON.parse(seralizedState);
	} catch {
		return undefined;
	}
};

export const saveState = (state) => {
	try {
		const seralizedState = JSON.stringify(state);
		localStorage.setItem("state", seralizedState);
	} catch {
		//Ignore
	}
};
