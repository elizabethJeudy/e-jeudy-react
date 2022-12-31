import React from "react";
import "./About.css";
import lizzy3 from "../images/lizzy3.JPG";
import { FaAward } from "react-icons/fa";
import { VscNewFolder } from "react-icons/vsc";

export default function About() {
	return (
		<section id="about">
			<h2>About Me</h2>

			<div className="container aboutContainer">
				<div className="about-me">
					<div className="about-me-img">
						<img src={lizzy3} alt="about me" />
					</div>
				</div>
				<div className="about-content">
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
						My interest in code started in in February of 2022 and by May, I had
						enrolled in SheCodes Workshops. Since then, I've completed SheCodes
						Basics, SheCodes Plus, SheCodes Responsive, and I am currently
						completing SheCodes React. Simultaneously, I am learning through
						CodeCademy. I love to build things and I love learning new ways to
						build them.
					</p>

					<a href="#contact" className="btn">
						Let's Talk!
					</a>
				</div>
			</div>
		</section>
	);
}
