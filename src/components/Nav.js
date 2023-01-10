import React from "react";
import "./Nav.css";
import { AiFillHome } from "react-icons/ai";
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaFileCode } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export default function Nav() {
	return (
		<nav>
			<a href="#">
				<AiFillHome />
			</a>
			<a href="#about">
				<IoPersonCircleOutline />
			</a>
			<a href="#projects">
				<FaFileCode />
			</a>
			<a href="#contact">
				<AiOutlineMail />
			</a>
		</nav>
	);
}
