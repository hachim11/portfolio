import React from "react";
import Backend from "./Backend";
import Frontend from "./Frontend";
import "./skills.css";
import data from "./data";
const Skills = () => {
	return (
		<section className=" section skills" id="skills">
			<h2 className="section_title">Skills</h2>
			<span className="section_subtitle">My technical level</span>

			{data.map((item) => (
				<div className="container skills_container grid" key={item}>
					<Frontend data={item.frontend} />
					<Backend data={item.backend} />
				</div>
			))}
		</section>
	);
};

export default Skills;
