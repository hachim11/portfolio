import React, { useContext } from "react";
import "./footer.css";
import { FaLinkedin, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";

import { DataContext } from "../Main";

const Footer = () => {
	const { data } = useContext(DataContext);
	const arr = Object.entries(data);
	const copyright = arr.map((item) => item[1].section.footer);
	return (
		<section className="section footer">
			<div className="container footer_container">
				<div className="footer_title">
					<a href="#home" className="icon">
						HACHEM
					</a>
				</div>
				<div className="footer_links">
					<a href="https://twitter.com/hachem__19?t=tmXCWGfCFgQmVBGlk9nUOA&s=09">
						<FaTwitter className="icon" />
					</a>
					<a href="https://www.linkedin.com/in/hachem-khalidi-824783255">
						<FaLinkedin className="icon" />
					</a>
					<a href="http://instagram.com/hachem___11">
						<FaInstagram className="icon" />
					</a>
					<a href="#h">
						<FaGithub className="icon" />
					</a>
				</div>
				<div className="footer_copyright">
					<small>&copy;{copyright}</small>
				</div>
			</div>
		</section>
	);
};

export default Footer;
