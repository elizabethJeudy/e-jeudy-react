import React from "react";
import "./App.css";
import Header from "./components/Header";

import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Projects from "./components/Projects";

export default function App() {
	return (
		<div>
			<Header />
			<Nav />
			<About />
			<Projects />
			<Contact />
			<Footer />
		</div>
	);
}
