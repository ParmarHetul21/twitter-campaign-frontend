import React from "react";
import Header from "./Header";
import "../styles/FileUpload.css";
// import sample from "../source/sample.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FileUpload() {
	const [file, setfile] = useState("");
	const [date, setdate] = useState("");
	const navigate = useNavigate();

	const setFileUpload = e => {
		setfile(e.target.files[0]);
	};

	const setDate = e => {
		console.log(e.target.value);
		setdate(e.target.value);
	};

	const onFileUpload = e => {
		e.preventDefault();
		navigate("/table");
		console.log(file, "-", date);
	};

	return (
		<div className="container">
			<Header />
			<div className="log-form">
				<h2>Upload your file</h2>
				<form id="form-control" action="#">
					<input
						type="date"
						title="username"
						placeholder="username"
						onChange={setDate}
						required
					/>
					<input
						type="file"
						title="username"
						placeholder="username"
						onChange={setFileUpload}
						accept=".csv, .xslv"
						required
					/>
					<button className="btn" onClick={onFileUpload}>
						Upload
					</button>
				</form>
				<a
					href="/download/sample.json"
					className="download"
					target="_blank"
				>
					Download sample
				</a>
			</div>
		</div>
	);
}
