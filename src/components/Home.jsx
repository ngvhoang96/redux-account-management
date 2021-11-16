import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
	const isLoggedIn = useSelector((state) => state.loginReducer);
	const userData = useSelector((state) => state.userReducer);
	return (
		<>
			<h3>Hello {isLoggedIn ? userData.name : "guest"},</h3>
			<p>What can we do for you today?</p>
			<Link className="link" to="/account">
				Access account
			</Link>
		</>
	);
};

export default Home;
