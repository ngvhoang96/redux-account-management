const loginReducer = (state = false, action) => {
	switch (action.type) {
		case "action.login":
			return true;
		case "action.logout":
			return false;
		default:
			return state;
	}
};

export default loginReducer;
