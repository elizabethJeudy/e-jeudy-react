import React from "react";
import CTA from "./CTA";
import "./Header.css";
import lizzy2 from "../images/lizzy2.svg";
import Socials from "./Socials";

export default function Header() {
	return (
		<header>
			<div className="container headerContainer">
				<h1>Elizabeth Jeudy</h1>
				<h5 className="text-light">Front-end Developer</h5>
				<CTA />
				<Socials />
				<div className="me">
					<img src={lizzy2} alt="me" />
				</div>
				<a href="#contact" className="scroll-down">
					Scroll Down
				</a>
			</div>
		</header>
	);
}
