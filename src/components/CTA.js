import React from "react";
import ElizabethJeudyFED from "../images/ElizabethJeudyFED.pdf";

export default function CTA() {
	return (
		<div className="cta">
			<a href={ElizabethJeudyFED} download className="btn">
				Resume
			</a>
			<a href="mailto:tjeudy.e@gmail.com" className="btn btn-primary">
				Get in touch
			</a>
		</div>
	);
}
