import React from "react";
import Resume22 from "../images/Resume22.pdf";

export default function CTA() {
	return (
		<div className="cta">
			<a href={Resume22} download className="btn">
				Resume
			</a>
			<a href="mailto:tjeudy.e@gmail.com" className="btn btn-primary">
				Get in touch
			</a>
		</div>
	);
}
