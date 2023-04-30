import React from "react";
import "./Projects.css";
import weatherappreact from "../images/weatherappreact.jpg";
import dictionary from "../images/dictionary.png";
import wordle from "../images/wordle.png";
import CTA from "./CTA";

export default function Projects() {
	return (
		<section id="projects">
			<h2>Projects</h2>
			<div className="container projectsContainer">
				<article className="project-item">
					<div className="project-img">
						<img src={wordle} alt=""></img>
					</div>
					<h3>Wordle Clone</h3>
					<div className="ctaBtns">
						<a
							href="https://github.com/elizabethJeudy/wordleClone"
							className="btn"
							target="_blank"
							rel="noreferrer"
						>
							Github
						</a>
						<a
							href="https://elizabethjeudy.github.io/wordleClone/"
							className="btn btn-primary"
							target="_blank"
							rel="noreferrer"
						>
							Demo
						</a>
					</div>
				</article>

				<article className="project-item">
					<div className="project-img">
						<img src={dictionary} alt=""></img>
					</div>
					<h3>Dictionary App</h3>
					<div className="ctaBtns">
						<a
							href="https://github.com/elizabethJeudy/dictionary-app"
							className="btn"
							target="_blank"
							rel="noreferrer"
						>
							Github
						</a>
						<a
							href="https://dict-app-react.netlify.app/"
							className="btn btn-primary"
							target="_blank"
							rel="noreferrer"
						>
							Demo
						</a>
					</div>
				</article>

				<article className="project-item">
					<div className="project-img">
						<img src={weatherappreact} alt=""></img>
					</div>
					<h3>Weather App React</h3>
					<div className="ctaBtns">
						<a
							href="https://github.com/elizabethJeudy/weather-app-react"
							className="btn"
							target="_blank"
							rel="noreferrer"
						>
							Github
						</a>
						<a
							href="https://ejeudy-weather-react.netlify.app/"
							className="btn btn-primary"
							target="_blank"
							rel="noreferrer"
						>
							Demo
						</a>
					</div>
				</article>
			</div>
			<div id="contact" className="cta">
				<CTA />
			</div>
		</section>
	);
}
