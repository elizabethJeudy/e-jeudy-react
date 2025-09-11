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
						Hi, I’m Elizabeth—a self-motivated Front-end Developer with a
						background in hospitality and a BA in Human Services. My experience
						in psychology and service-driven environments has shaped a
						user-first mindset rooted in empathy, clear communication, and
						thoughtful problem-solving.
						<br /> I’m currently earning my BS in Software Engineering at
						Western Governors University, where I’m growing my skills in Java,
						Python and front-end development. I also enjoy working with design
						tools like Canva and am learning Figma to better understand the full
						product design process.
						<br /> As a lifelong learner and passionate advocate for mental
						health, I’m especially drawn to projects that promote well-being and
						align with my Christian values.
						<br /> I’m currently seeking internship or apprenticeship
						opportunities where I can contribute, grow, and collaborate with
						mission-driven teams. Let’s build something meaningful together.
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
