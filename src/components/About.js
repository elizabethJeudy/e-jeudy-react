import React from "react";
import "./About.css";
import lizzy3 from "../images/lizzy3.JPG";
import { FaAward } from "react-icons/fa";
import { VscNewFolder } from "react-icons/vsc";

export default function About() {
	return (
		<section id="about">
			<div className="container aboutContainer">
				<div className="about-me">
					<div className="about-me-img">
						<img src={lizzy3} alt="about me" />
					</div>
				</div>
				<div className="about-content">
					<h2>About Me</h2>
					<div className="about-cards">
						<article className="about-card">
							<FaAward className="about-icon" />
							<h5>Tech Stack</h5>
							<small>
								{" "}
								HTML/CSS, JavaScript, React.js, Node.js, Java (early stages)
							</small>
						</article>

						<article className="about-card">
							<VscNewFolder className="about-icon" />
							<a
								href="https://github.com/elizabethJeudy"
								target="_blank"
								rel="noreferrer"
								className="github-projects"
							>
								<h5>Projects</h5>
							</a>

							<small>10+ Completed </small>
						</article>
					</div>

					<p>
						Hey, I’m Elizabeth, a self-motivated Front-end Developer
						transitioning after 5 years in hospitality and a BA in Human
						Services. My background in service-oriented fields allows for a
						user-focused approach to design and development. I aim to build
						interfaces centered on the end user's experience. <br /> Although
						new to software engineering, I’m continuously excited to learn new
						technical skills. I’m a lifelong reader, especially of fantasy and
						non-fiction, which always brings curiosity to continuously improve
						as a developer. <br />
						While currently learning independently, I look forward to eventually
						collaborating with creative teams to bring products to life. <br />
						<br />
						Feel free to{" "}
						<a
							href="https://www.linkedin.com/in/elizabeth-jeudy/"
							target="_blank"
							rel="noreferrer"
						>
							connect
						</a>
						!
					</p>
				</div>
			</div>
		</section>
	);
}
