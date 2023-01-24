import React, { useState, useEffect, createContext, useContext } from "react";
import {
	Navbar,
	Home,
	About,
	Skills,
	Projects,
	Contact,
	Footer,
} from "./index";

import translation from "../translation/data.json";
import { ThemeContext } from "../App";

export const DataContext = createContext();

const Main = () => {
	const [data, setData] = useState([]);
	const { theme } = useContext(ThemeContext);
	const [language, setLanguage] = useState("english");
	const navigator = (
		<div className="navbar">
			<select
				value={language}
				onChange={(e) => {
					localStorage.setItem("val", e.target.value);
					window.location.reload();
				}}
			>
				<option>english</option>
				<option>spanish</option>
				<option>frensh</option>
			</select>
		</div>
	);
	useEffect(() => {
		setLanguage(localStorage.getItem("val"));

	}, [language]);

	const langNavigator = (
		<ul className="langLists flex">
			<li
				className="icon"
				onClick={() => {
					localStorage.setItem("val", "english");
					window.location.reload();
				}}
			>
				🟡
			</li>
			<li
				className="icon"
				onClick={() => {
					localStorage.setItem("val", "spanish");
					window.location.reload();
				}}
			>
				🔵
			</li>
			<li
				className="icon"
				onClick={() => {
					localStorage.setItem("val", "frensh");
					window.location.reload();
				}}
			>
				🔴
			</li>
		</ul>
	);
	useEffect(() => {
		if (language === "english") {
			setData(translation.data.filter((item) => item.lang === "english"));
			
		} else if (language === "spanish") {
			
			setData(translation.data.filter((item) => item.lang === "spanish"));

		} else if (language === "frensh") {
			
			setData(translation.data.filter((item) => item.lang === "frensh"));
		}
	}, [language]);

	
	

	return (
		<DataContext.Provider value={{ data, navigator, langNavigator }}>
			<div id={theme}>
				<Navbar />
				<Home data={data} />
				<About data={data} />
				<Skills data={data} />
				<Projects data={data} />
				<Contact data={data} />
				<Footer data={data} />
			</div>
		</DataContext.Provider>
	);
};

export default Main;
