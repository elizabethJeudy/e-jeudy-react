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
							<h5>SheCodes Alumni</h5>
							<small>SheCodes Pro Workshops</small>
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
						Hey, I'm Elizabeth and I'm an enthusiastic and driven Front End
						Developer who is passionate about creating innovative and
						user-friendly solutions. With my expertise in HTML, CSS, JavaScript,
						and React, I have a strong foundation in Front-End web development
						and am eager to expand my skills to Full Stack Development. <br />
						<br />
						I'm a creative problem-solver who is always seeking out new
						challenges and opportunities to learn. I am adept at turning complex
						problems into elegant solutions and committed to delivering
						high-quality work that meets user needs.
						<br />
						<br />
						Beyond my technical skills, I'm a well-rounded individual who enjoys
						reading and traveling in my free time. My curiosity and sense of
						adventure make me a valuable team member who is always looking for
						ways to grow and improve. If you're looking for a motivated and
						talented Front End Developer with a passion for problem-solving and
						a love of learning, I would love to be an excellent addition to your
						team. Feel free to{" "}
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
