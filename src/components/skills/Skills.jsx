import React from "react";
import Backend from "./Backend";
import Frontend from "./Frontend";
import "./skills.css";
import dataSkills from "./data";
import { useContext } from "react";
import { DataContext } from "../Main";
const Skills = () => {
	const { data } = useContext(DataContext);

	const arr = Object.entries(data);
	return (
		<section className=" section skills" id="skills">
			<h2 className="section_title">{arr
				.map((item) => item[1].section.skills.title)}</h2>
			<span className="section_subtitle">{arr
				.map((item) => item[1].section.skills.subtitle)}</span>

			{dataSkills.map((item) => (
				<div className="container skills_container grid" key={item}>
					<Frontend data={item.frontend} />
					<Backend data={item.backend} />
				</div>
			))}
		</section>
	);
};

export default Skills;
