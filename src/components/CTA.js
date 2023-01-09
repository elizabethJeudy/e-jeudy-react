import React from "react";
import Resume from "../images/Resume.pdf";

export default function CTA() {
	return (
		<div className="cta">
			<a href={Resume} download className="btn">
				Resume
			</a>
			<a href="mailto:tjeudy.e@gmail.com" className="btn btn-primary">
				Get in touch
			</a>
		</div>
	);
}
