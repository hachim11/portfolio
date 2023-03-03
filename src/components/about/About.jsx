import React, { useContext } from "react";
import { DataContext } from "../Main";
import Info from "./Info";
import "./about.css";
import { aboutImg } from "../../images";
import CV from '../../assest/cv.pdf'

const About = () => {
	const { data } = useContext(DataContext);

	const arr = Object.entries(data);

	return (
		<section className=" section about" id="about">
			{arr
				.map((item) => item[1].section.about)
				.map((i, index) => (
					<div key={index}>
						<h2 className="section_title">{i.title}</h2>
						<span className="section_subtitle">{i.subtitle}</span>
					</div>
				))}
			{arr
				.map((item) => item[1].section.about)
				.map((i, index) => (
					<div className="about_container container grid" key={index}>
						<div className="about_img">
							<img src={aboutImg} alt="" />
						</div>
						<div className="about_data">
							<Info data={i.info} key={index} />
							<p className="about_desc txt">{i.desc}</p>
							{/* <a download="HachemCV" href={ i.btn === "Descargar CVs" && CV} className="btn btn--flex"> */}
							<a download="HachemCV" href={CV} className="btn btn--flex">
								{i.btn}
							</a>
						</div>
					</div>
				))}
		</section>
	);
};

export default About;
