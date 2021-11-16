import { BrowserRouter, Routes, Route } from "react-router-dom";
import Account from "./components/Account";
import Home from "./components/Home";
import NavBar from "./components/utility/NavBar";

function App() {
	return (
		<>
			<div className="app-container">
				<NavBar />
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/account" element={<Account />} />
					</Routes>
				</BrowserRouter>
			</div>
		</>
	);
}

export default App;
