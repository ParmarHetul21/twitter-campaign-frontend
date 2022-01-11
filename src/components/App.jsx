import "../styles/App.css";
import "../index.css";
import { Routes, Route } from "react-router-dom";
import Login from "../components/Login";
import Table from "../components/Table";
import FileUpload from "../components/FileUpload";

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<FileUpload />} />
				<Route path="login" element={<Login />} />x
				<Route path="table" element={<Table />} />
				<Route path="logout" />
			</Routes>
		</div>
	);
}

export default App;
