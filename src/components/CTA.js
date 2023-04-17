import React from "react";
import ElizabethJeudyResume from "../images/ElizabethJeudyResume.png";

export default function CTA() {
	return (
		<div className="cta">
			<a href={ElizabethJeudyResume} download className="btn">
				Resume
			</a>
			<a href="mailto:tjeudy.e@gmail.com" className="btn btn-primary">
				Get in touch
			</a>
		</div>
	);
}
