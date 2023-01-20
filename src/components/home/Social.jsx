import React from "react";
import { FaInstagram , FaGithub ,FaLinkedin} from "react-icons/fa";

const Social = () => {
	return (
		<div className="home_social">
			<a href="#h" className="social-icon">
				<FaLinkedin className="icon" />
			</a>
			<a href="#h" className="social-icon">
				<FaInstagram className="icon" />
			</a>
			<a href="#h" className="social-icon">
				<FaGithub className="icon" />
			</a>
		</div>
	);
};

export default Social;
