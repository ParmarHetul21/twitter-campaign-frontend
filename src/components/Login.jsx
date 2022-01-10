import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
	const [name, setname] = useState("");
	const [password, setpassword] = useState("");
	const navigate = useNavigate();
	var error = document.getElementById("error");

	const checkUsername = e => {
		setname(e.target.value);
	};

	const checkPassword = e => {
		setpassword(e.target.value);
	};

	const onLoginChnage = e => {
		if (name === "pratik" && password === "Jain@123") {
			navigate("/table");
		} else if (name === "" && password === "") {
			error.style.display = "block";
		} else {
			error.style.display = "block";
		}
	};

	return (
		<div className="container">
			<header className="App-header">
				<h1>Twitter Utility</h1>
			</header>
			<div className="log-form">
				<h2>Login to your account</h2>
				<form>
					<input
						type="text"
						title="username"
						placeholder="username"
						onChange={checkUsername}
						required
					/>
					<input
						type="password"
						title="username"
						placeholder="password"
						onChange={checkPassword}
						required
					/>
					<button
						type="submit"
						className="btn"
						onClick={onLoginChnage}
					>
						Login
					</button>
				</form>
				<p className="error">username and password are wrong</p>
				<p className="error">username and password are empty</p>
			</div>
		</div>
	);
}

export default Login;
