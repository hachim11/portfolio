import React from "react";
import { FaInstagram , FaGithub ,FaLinkedin} from "react-icons/fa";

const Social = () => {
	return (
		<div className="home_social">
			<a href="#https://www.linkedin.com/in/hachem-khalidi-824783255" className="social-icon">
				<FaLinkedin className="icon" />
			</a>
			<a href="#http://instagram.com/hachem___11" className="social-icon">
				<FaInstagram className="icon" />
			</a>
			<a href="http://github.com/hachim11" className="social-icon">
				<FaGithub className="icon" />
			</a>
		</div>
	);
};

export default Social;
