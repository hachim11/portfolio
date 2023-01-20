import React, { createContext, useState } from "react";
import "./App.css";
import Main from "./components/Main";

export const ThemeContext = createContext("light");

const App = () => {
	const [theme, setTheme] = useState("light");

	
	return (
		<ThemeContext.Provider value={{ theme, setTheme}}>
			<>
				<Main />
			</>
		</ThemeContext.Provider>
	);
};

export default App;
