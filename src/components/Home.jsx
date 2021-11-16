import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Home = () => {
	const isLoggedIn = useSelector((state) => state.loginReducer);
	return (
		<>
			<h3>Hello {isLoggedIn ? "member" : "guest"},</h3>
			<p>What can we do for you today?</p>
			<Link to="/account">Access account</Link>
		</>
	);
};

export default Home;
