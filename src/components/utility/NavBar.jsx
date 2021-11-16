import { useDispatch } from "react-redux";
import {
	actionGetUser,
	actionLogin,
	actionLogout,
} from "../../redux_store/actions/index";

const NavBar = () => {
	const dispatch = useDispatch();

	const handleLogin = () => {
		dispatch(actionLogin());
		dispatch(actionGetUser());
	};

	const handleLogout = () => {
		dispatch(actionLogout());
	};
	return (
		<div>
			<a href="/">Home</a>
			<button onClick={handleLogin}>Log In</button>
			<button onClick={handleLogout}>Log Out</button>
		</div>
	);
};

export default NavBar;
