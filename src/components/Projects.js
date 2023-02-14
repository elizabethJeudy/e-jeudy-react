import React from "react";
import "./Projects.css";
import weatherappreact from "../images/weatherappreact.jpg";
import dictionary from "../images/dictionary.png";
import CTA from "./CTA";

export default function Projects() {
	return (
		<section id="projects">
			<h2>Projects</h2>
			<div className="container projectsContainer">
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
			</div>
			<div id="contact" className="cta">
				<CTA />
			</div>
		</section>
	);
}
