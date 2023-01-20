import React, { useContext } from "react";
import { DataContext } from "../Main";
import Info from "./Info";
import "./about.css";
import { Img4 } from "../../images";

const About = () => {
	const { data } = useContext(DataContext);

	const arr = Object.entries(data);
	

	return (
		<section className=" section about" id="about">
			{arr
				.map((item) => item[1].section.about)
				.map((i,index) => (
					<div 	key={index}>
						<h2 className="section_title">{i.title}</h2>
						<span className="section_subtitle">{i.subtitle}</span>
					</div>
				))}
			{arr
				.map((item) => item[1].section.about)
				.map((i , index) => (
					<div className="about_container container grid" 	key={index}>
						<img src={Img4} alt="" className="about_img" />
						<div className="about_data" >
							<Info data={i.info}  key={index}/>
							<p className="about_desc txt">{i.desc}</p>
							<a download="" href="#cv" className="btn btn--flex">
								{i.btn}
							</a>
						</div>
					</div>
				))}

			{/* <h1>{arr.map((item) => item[1].section.about.title)}</h1>
			<p>{arr.map((item) => item[1].section.about.desc)}</p> */}
		</section>
	);
};

export default About;
