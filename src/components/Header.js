import React from "react";
import CTA from "./CTA";
import "./Header.css";

export default function Header() {
	return (
		<header>
			<div className="container headerContainer">
				<h5>Hey, I'm</h5>
				<h1>Elizabeth Jeudy</h1>
				<h5 className="text-light">Frontend Developer</h5>
				<CTA />
			</div>
		</header>
	);
}
