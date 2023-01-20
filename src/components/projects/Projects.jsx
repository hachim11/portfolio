import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { DataContext } from "../Main";
// import { motion } from "framer-motion";
// import data from "./dataPortfolio";
import { Img1,Img4 } from "../../images";
import "./projects.css";
import Works from "./Works";

const Projects = () => {
	const [works, setWorks] = useState([]);
	//const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
	const [activeFilter, setActiveFilter] = useState("All");
	const [filterWork, setFilterWork] = useState([]);
	const { data } = useContext(DataContext);







	const datas = [
		{   id:1,
			title: data.map((i) => i.section.projects.works[0].title),
			description: data.map((i) => i.section.projects.works[0].desc),
			projectLink: "http://hachim11.github.io/11/",
			codeLink: "http://github.com",
			img: Img1,
			tags: "Web Dev",
		},

		{   id:2,
			title: data.map((i) => i.section.projects.works[1].title),
			description: data.map((i) => i.section.projects.works[1].desc),
			 projectLink: Img1,
			img: Img4,
			tags: "Photography",
		},
		{   id:3,
			title: data.map((i) => i.section.projects.works[2].title),
			description: data.map((i) => i.section.projects.works[2].desc),
			// projectLink: images.castle,
			img:Img1,
			tags: "Photography",
		},
		{   id:4,
			title: data.map((i) => i.section.projects.works[3].title),
			description: data.map((i) => i.section.projects.works[3].desc),
			// projectLink: images.hori,
			img: Img4,
			tags: "Photography",
		},
		{   id:5,
			title: data.map((i) => i.section.projects.works[4].title),
			description: data.map((i) => i.section.projects.works[4].desc),
			// projectLink: images.tea,
			//img: `${images.tea}`,
			tags: "Photography",
		},
		{   id:6,
			title: data.map((i) => i.section.projects.works[5].title),
			description: data.map((i) => i.section.projects.works[5].desc),
			// projectLink: images.bird,
			//img: `${images.bird}`,
			tags: "Photography",
		},
	];
	useEffect(() => {
		setWorks(datas);
		setFilterWork(datas);
	}, [data]);

	

	const handleWorkFilter = (item) => {
		setActiveFilter(item);

		setTimeout(() => {
			if (item === "All") {
				setFilterWork(works);
			} else {
				setFilterWork(works.filter((work) => work.tags.includes(item)));
			}
		}, 500);
	};

	return (
		<section className="section projects" id="projects">
			<h2 className="section_title">Projects</h2>
			<span className="section_subtitle">My recent works</span>

			<div className="container projects_container">
				<div className="projects_filter content">
					{["Web Dev", "UI/UX", "Photography", "All"].map((item, index) => (
						<div
							key={index}
							onClick={() => handleWorkFilter(item)}
							className={`projects_filter-item   ${
								activeFilter === item ? "item-active" : ""
							}`}
						>
							{item}
						</div>
					))}
				</div>
				<Works filterWork={filterWork} key={works} />
			</div>
		</section>
	);
};

export default Projects;
