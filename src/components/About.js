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
							<h5>Projects</h5>
							<small>10+ Completed </small>
						</article>
					</div>

					<p>
						Hey, I'm Elizabeth and I am newly passionate about building things
						for the web. My journey truly began in 2007 when I was a middle
						schooler playing with my MySpace page layout which taught me about
						HTML & CSS, and never thought anything more of it. Fast foward to
						10+ years later and who would have guessed!
						<br />
						<br />
						The beginning of 2022 is where it again piqued my interest, however
						like most career switchers, I didn't think it would be something I
						could do.
						<br />
						Since then, I have completed courses on Codecademy, and completed
						the SheCodes Pro Workshops. I've developed a couple of projects that
						you'll find below which I am proud of. I am now looking for a junior
						developer position, but in the meantime I will continue creating
						what I enjoy.
						<br />
						<br />
						Feel free to connect if you'd like to collab together or want a new
						devloper friend!
					</p>
				</div>
			</div>
		</section>
	);
}
