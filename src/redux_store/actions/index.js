export const actionLogin = () => {
	return { type: "action.login" };
};

export const actionLogout = () => {
	return { type: "action.logout" };
};

export const actionGetUser = () => {
	return { type: "action.getUser" };
};

export const actionUpdateUser = (data) => {
	return { type: "action.updateUser", payload: data };
};
