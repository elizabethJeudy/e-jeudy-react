import React from "react";
import "./Projects.css";
import weatherappreact from "../images/weatherappreact.jpg";
import drumkit from "../images/drumkit.jpg";
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
						<img src={drumkit} alt=""></img>
					</div>
					<h3>JavaScript 30 - Drumkit</h3>
					<div className="ctaBtns">
						<a
							href="https://github.com/elizabethJeudy/Javascript30/tree/main/drumKit"
							className="btn"
							target="_blank"
							rel="noreferrer"
						>
							Github
						</a>
						<a
							href="https://javascript30-drumkit01.netlify.app/"
							className="btn btn-primary"
							target="_blank"
							rel="noreferrer"
						>
							Demo
						</a>
					</div>
				</article>
				<div id="contact" className="cta">
					<CTA />
				</div>
			</div>
		</section>
	);
}
