import React from "react";
import "./Header.css";
import Socials from "./Socials";
import CTA from "./CTA";

export default function Header() {
	return (
		<header>
			<div className="container headerContainer">
				<h1>Elizabeth Jeudy</h1>
				<h5 className="text-light">Front-end Developer</h5>
				<Socials />

				<a href="#contact" className="scroll-down">
					Resume
				</a>

				<div id="contact">
					<CTA />
				</div>
			</div>
		</header>
	);
}
