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
		<div className="p-3 flex">
			<div className="flex-1">
				<a className="text-indigo-500 font-bold" href="/">
					Home
				</a>
			</div>
			<div className="space-x-2">
				<button className="btn btn-primary" onClick={handleLogin}>
					Log In
				</button>
				<button className="btn btn-secondary" onClick={handleLogout}>
					Log Out
				</button>
			</div>
		</div>
	);
};

export default NavBar;
