import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from "./components/Account";
import Home from "./components/Home";
import NavBar from "./components/utility/NavBar";

function App() {
	return (
		<>
			<NavBar />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/account" element={<Account />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
