import React, { useContext } from "react";
import { DataContext } from "../Main";

const Data = () => {
	const { data } = useContext(DataContext);

	const arr = Object.entries(data);
	return (
		<div className="home_data">
			<h1 className="home_title title">
				{arr.map((item) => item[1].section.home.title)}
			</h1>

			<h3 className="home_subtitle txt">{arr.map((item) => item[1].section.home.subtitle)}</h3>
			<p className="home_desc txt">
			{arr.map((item) => item[1].section.home.desc)}
			</p>
			<a href="#contact" className="btn btn--flex">
			{arr.map((item) => item[1].section.home.btn)}
			</a>
		</div>
	);
};

export default Data;
