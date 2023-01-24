import React, { useState, useContext } from "react";
import "./navbar.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { GrLanguage } from "react-icons/gr";
import { TbGridDots } from "react-icons/tb";
import { FaRegMoon, FaRegSun } from "react-icons/fa";
import { ThemeContext } from "../../App";
import { DataContext } from "../Main";

const Navbar = ( ) => {
	const { theme, setTheme } = useContext(ThemeContext);
	const { data, navigator, langNavigator } = useContext(DataContext);
	const arr = Object.entries(data);
	const [active, setActive] = useState("navBar");
	const [lang, setLang] = useState("language");
	const showNav = () => {
		setActive("navBar activeNavbar");
	};
	const closeNav = () => {
		setActive("navBar");
	};
	const showLang = () => {
		setLang("language activeLanguage");
	};
	const closeLang = () => {
		setLang("language");
	};

	const toggleTheme = () => {
		setTheme((curr) => (curr === "light" ? "dark" : "light"));
	};
	return (
		<div className="navBarSection navbar">
			<header className="header flex">
				<div className="logoDiv">
					<a href="#home" className="logo">
						<h1 className="icon">Hach.</h1>
					</a>
				</div>
				<div className="mobileTheme">
					{theme === "dark" ? (
						<FaRegSun className="iconLight" onClick={toggleTheme} />
					) : (
						<FaRegMoon className="iconDark" onClick={toggleTheme} />
					)}
				</div>
				<div className={active}>
					<ul className="navLists flex ">
						{arr.map((item) =>
							item[1].section.navbar.map((i) => (
								<li className="navItem" key={i.id}>
									<a href={i.href} className="navLink">
										{i.title}
									</a>
								</li>
							))
						)}
					</ul>
					<div className="langSmall flex">{navigator}</div>

					<div className="closeNavbar" onClick={closeNav}>
						<AiFillCloseCircle className="icon" />
					</div>
				</div>
				<div className="setting">
					<div className="labTheme">
						{theme === "dark" ? (
							<FaRegSun className="iconLight" onClick={toggleTheme} />
						) : (
							<FaRegMoon className="iconDark" onClick={toggleTheme} />
						)}
					</div>
					<div className="languageBtn" onClick={showLang}>
						<GrLanguage className="iconLang" />
					</div>
				</div>
				<div className={lang}>
					{langNavigator}
					<div className="closeLang" onClick={closeLang}>
						<AiFillCloseCircle className="icon" />
					</div>
				</div>
				<div className="toggleNavbar" onClick={showNav}>
					<TbGridDots className="icon" />
				</div>
			</header>
		</div>
	);
};

export default Navbar;
