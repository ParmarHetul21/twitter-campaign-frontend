import "../styles/App.css";
import "../index.css";
import { Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Table from "../components/Table";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="table" element={<Table />} />
			</Routes>
		</div>
	);
}

export default App;
