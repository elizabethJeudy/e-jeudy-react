import React from "react";
import "./Footer.css";
import logo2 from "../images/logo2.jpg";
import { SlSocialLinkedin } from "react-icons/sl";
import { SiGithub } from "react-icons/si";
import { SlSocialTwitter } from "react-icons/sl";
import { SiCodepen } from "react-icons/si";

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
				<a href="mailto:tjeudy.e@gmail.com #contact">Contact</a>
			</ul>
			<div className="socials">
				<a
					href="https://www.linkedin.com/in/elizabeth-jeudy/"
					target="_blank"
					rel="noreferrer"
				>
					<SlSocialLinkedin />
				</a>
				<a
					href="https://github.com/elizabethJeudy"
					target="_blank"
					rel="noreferrer"
				>
					<SiGithub />
				</a>

				<a
					href="https://twitter.com/LizzyCodes"
					target="_blank"
					rel="noreferrer"
				>
					<SlSocialTwitter />
				</a>

				<a href="https://codepen.io/elzbthxo" target="_blank" rel="noreferrer">
					<SiCodepen />
				</a>
			</div>

			<footer className="footer-copyright">
				<small>&copy; 2022 Elizabeth Jeudy</small>
			</footer>
		</footer>
	);
}
