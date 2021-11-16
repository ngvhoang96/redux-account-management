import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

const Account = (props) => {
	const userData = useSelector((state) => state.userReducer);
	const [state, setState] = useState({ name: "", email: "", password: "" });

	useEffect(() => {
		if (userData) setState((s) => userData);
		else setState((s) => undefined);
	}, [userData]);

	const handleSubmit = (event) => {
		event.preventDefault();
		const updatedData = {
			name: state.name,
			email: state.email,
			password: state.password,
		};
		console.log(updatedData);
	};

	return (
		<>
			<Link to="/">Back</Link>
			<h3>Account view</h3>
			<form onSubmit={handleSubmit}>
				<input
					placeholder="name"
					type="text"
					value={state?.name || ""}
					onChange={(e) => setState({ ...state, name: e.target.value })}
				/>
				<input
					placeholder="email"
					type="email"
					value={state?.email || ""}
					onChange={(e) => setState({ ...state, email: e.target.value })}
				/>
				<input
					placeholder="password"
					type="password"
					value={state?.password || ""}
					onChange={(e) => setState({ ...state, password: e.target.value })}
				/>
				<button>Save</button>
			</form>
		</>
	);
};

export default Account;
