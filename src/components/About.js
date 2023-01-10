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
						Hey, I'm Elizabeth and I am newly passionate about building things
						for the web. My journey originally began when I was a middle
						schooler customizing MySpace themes which taught me about HTML &
						CSS, and never thought anything more of it. Fast foward to 10+ years
						later and who would have guessed!
						<br />
						<br />
						The beginning of 2022 is where it truly piqued my interest, however
						like most career switchers, I didn't believe learning how to program
						would be a concept I could grasp.
						<br />
						Since that interest, I've been able to reignite my passion for
						creativity and combine it with creating web applications. I've
						developed a couple of projects that you'll find below which I am
						proud of. I am now looking for a entry-level developer position, but
						in the meantime I will continue creating and learning.
						<br />
						<br />
						When I am not coding, I am reading a new book, or on a travel
						adventure. If you'd like to work on a project together or want to
						gain new a developer friend, feel free to{" "}
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
