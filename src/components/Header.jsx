import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
	return (
		<div>
			<header className="App-header">
				<h1> Twitter Utility </h1>

				<div className="nav-link">
					<Link to="/">Home</Link>
					<Link to="/login">Login</Link>
					<Link to="/logout">Logout</Link>
				</div>
			</header>
		</div>
	);
}
