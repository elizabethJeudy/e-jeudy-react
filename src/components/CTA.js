import React from "react";
import ElizabethJ2025 from "../images/ElizabethJ2025";

export default function CTA() {
	return (
		<div className="cta">
			<a href={ElizabethJ2025} download className="btn">
				Resume
			</a>
			<a href="mailto:tjeudy.e@gmail.com" className="btn btn-primary">
				Get in touch
			</a>
		</div>
	);
}
