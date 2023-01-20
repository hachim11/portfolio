import React from "react";
import SocialMedia from "./Social";
import "./home.css";

import Data from "./Data";

const Home = () => {
	return (
		<section className="home section" id="home">
			<div className="container home_container grid">
				<div className="home_content grid">
					<SocialMedia />
					<div className="home_img"></div>
					<Data />
				</div>
			</div>
		</section>
	);
};

export default Home;
