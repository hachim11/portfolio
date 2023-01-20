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
					setLanguage(e.target.value);
				}}
			>
				<option>english</option>
				<option>spanish</option>
				<option>frensh</option>
			</select>
		</div>
	);

	const langNavigator = (
		<ul className="langLists flex">
			<li className="icon" onClick={() => setLanguage("english")}>
				🟡
			</li>
			<li className="icon" onClick={() => setLanguage("spanish")}>
				🔵
			</li>
			<li className="icon" onClick={() => setLanguage("frensh")}>
				🔴
			</li>
		</ul>
	);
	useEffect(() => {

		setTimeout(()=>{

			if (language === "english") {
				setData(translation.data.filter((item) => item.lang === "english"));
			} else if (language === "spanish") {
				setData(translation.data.filter((item) => item.lang === "spanish"));
			} else if (language === "frensh") {
				setData(translation.data.filter((item) => item.lang === "frensh"));
			}
		},2000)
	}, [language]);
	
	// console.log(data.map((i)=>(i)))
	// console.log(translation);
	
	

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
