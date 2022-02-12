import React, { useState, useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { links, auth } from "./utilities/data";
import logo1 from "./utilities/logo1.svg";
import logo2 from "./utilities/logo2.svg";
import "./app.css";

const Navbar = () => {
	const [showLinks, setShowLinks] = useState(false);
	const linksContainerRef = useRef(null);
	const linksRef = useRef(null);
	const toggleLinks = () => {
		setShowLinks(!showLinks);
	};
	useEffect(() => {
		const linksHeight = linksRef.current.getBoundingClientRect().height;
		if (showLinks) {
			linksContainerRef.current.style.height = `${linksHeight}px`;
		} else {
			linksContainerRef.current.style.height = "0px";
		}
	}, [showLinks]);
	return (
		<nav>
			<div className="nav-center">
				<div className="nav-header">
					<img src={logo1} className="logo" alt="logo" />
					<img src={logo2} className="logo" alt="logo" />

					<button className="nav-toggle" onClick={toggleLinks}>
						<FaBars />
					</button>
				</div>
				<div className="links-container" ref={linksContainerRef}>
					<ul className="links" ref={linksRef}>
						{links.map((link) => {
							const { id, url, text } = link;
							return (
								<li key={id}>
									<a href={url}>{text}</a>
								</li>
							);
						})}
					</ul>
				</div>
				<ul className="social-icons">
					{auth.map((authicon) => {
						const { id, url, icon } = authicon;
						return (
							<li key={id} className="mx-2">
								<a href={url}>{icon}</a>
							</li>
						);
					})}
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
