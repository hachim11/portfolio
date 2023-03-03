import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { DataContext } from "../Main";
import { p1, p2, p3, p4, p5,p6 } from "../../images";
import "./projects.css";
import Works from "./Works";

const Projects = () => {
	const { data } = useContext(DataContext);
	const [works, setWorks] = useState([]);
	const [activeFilter, setActiveFilter] = useState("All");
	const [filterWork, setFilterWork] = useState([]);
	
	const allData = [
		{
			id: 1,
			title: data.map((i) => i.section.projects.works[0].title),
			description: data.map((i) => i.section.projects.works[0].desc),
			projectLink: "http://hach.vercel.app",
			codeLink: "http://github.com/hachim11",
			img: p1,
			tags: data.map((i) => i.section.projects.works[0].tag),
		},

		{
			id: 2,
			title: data.map((i) => i.section.projects.works[1].title),
			description: data.map((i) => i.section.projects.works[1].desc),
			projectLink: "http://cats-shop.vercel.app",
			codeLink: "http://github.com/hachim11",
			img: p2,
			tags: data.map((i) => i.section.projects.works[1].tag),
		},
		{
			id: 3,
			title: data.map((i) => i.section.projects.works[2].title),
			description: data.map((i) => i.section.projects.works[2].desc),
			projectLink: "http://fotografos.vercel.app",
			codeLink: "http://github.com/hachim11",
			img: p3,
			tags: data.map((i) => i.section.projects.works[2].tag),
		},
		{
			id: 4,
			title: data.map((i) => i.section.projects.works[3].title),
			description: data.map((i) => i.section.projects.works[3].desc),
			projectLink: "http://hachim--dev.vercel.app",
			codeLink: "http://github.com/hachim11",
			img: p4,
			tags: data.map((i) => i.section.projects.works[3].tag),
		},
		{
			id: 5,
			title: data.map((i) => i.section.projects.works[4].title),
			description: data.map((i) => i.section.projects.works[4].desc),
			//projectLink: "",
			//codeLink: "",
			img: p5,
			tags: data.map((i) => i.section.projects.works[4].tag),
		},
		{
			id: 6,
			title: data.map((i) => i.section.projects.works[5].title),
			description: data.map((i) => i.section.projects.works[5].desc),
			projectLink:'http://instagram.com/fotografos__11',
			img: p6,
			tags: data.map((i) => i.section.projects.works[5].tag),
		},
	];
	useEffect(() => {
		setWorks(allData);
		setFilterWork(allData);
	}, [data]);

	const handleWorkFilter = (item) => {
		setActiveFilter(item);

		setTimeout(() => {
			if (item === "All" || item === "Todas" || item === "Toute") {
				setFilterWork(works);
			} else {
				setFilterWork(works.filter((work) => work.tags.includes(item)));
			}
		}, 500);
	};

	return (
		<section className="section projects" id="projects">
			<h2 className="section_title">
				{data.map((i) => i.section.projects.title)}
			</h2>
			<span className="section_subtitle">
				{data.map((i) => i.section.projects.subtitle)}
			</span>

			<div className="container projects_container">
				<div className="projects_filter content">
					{data.map((i) =>
						i.section.projects.options.map((item, index) => (
							<div
								key={index}
								onClick={() => handleWorkFilter(item)}
								className={`projects_filter-item   ${
									activeFilter === item ? "item-active" : ""
								}`}
							>
								{item}
							</div>
						))
					)}
				</div>
				<Works filterWork={filterWork} key={works} />
			</div>
		</section>
	);
};

export default Projects;
