import React from "react";
import ElizabethJeudy from "../images/Elizabeth Jeudy.pdf";

export default function CTA() {
	return (
		<div className="cta">
			<a href={ElizabethJeudy} download className="btn">
				Resume
			</a>
			<a href="mailto:tjeudy.e@gmail.com" className="btn btn-primary">
				Get in touch
			</a>
		</div>
	);
}
