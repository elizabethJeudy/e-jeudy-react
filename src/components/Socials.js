import React from "react";
import { SlSocialLinkedin } from "react-icons/sl";
import { SiGithub } from "react-icons/si";

export default function Socials() {
	return (
		<div className="headerSocials">
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
		</div>
	);
}
