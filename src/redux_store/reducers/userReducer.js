const initialState = {
	name: "andrew",
	email: "haha@mail.com",
	password: "123",
};

const userReducer = (state, action) => {
	switch (action.type) {
		case "action.getUser":
			return initialState;
		case "action.updateUser":
			return action.payload;
		default:
			return null;
	}
};

export default userReducer;
