import React from "react";
import "./Footer.css";
import logo2 from "../images/logo2.jpg";

export default function Footer() {
	return (
		<footer>
			<a href="#" className="footer-logo">
				<img src={logo2} alt="logo" />
			</a>

			<ul className="permalinks">
				<li>
					<a href="#">Home</a>
				</li>
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#projects">Projects</a>
				</li>
				<a href="#contact">Contact</a>
			</ul>

			<footer className="footer-copyright">
				<small>&copy; 2022 Elizabeth Jeudy</small>
			</footer>
		</footer>
	);
}
