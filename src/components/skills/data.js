import {
	html,
	css,
	react,
	js,
	git,
	mongo,
	node,
	express,
	nextjs,
	firebase,
	sanity,
} from "../../images/index";

const data = [
	{
		frontend: [
			{ id: 1, name: "HTML", img: html },
			{ id: 2, name: "CSS", img: css },
			{ id: 3, name: "JavaScrip", img: js },
			{ id: 4, name: "ReactJS", img: react },
			{ id: 5, name: "NextJS", img: nextjs},
			{ id: 5, name: "Git", img: git },
		],
		backend: [
			{ id: 1, name: "NodeJS", img: node },
			{ id: 2, name: "Express", img: express },
			{ id: 3, name: "MongoDB", img: mongo },
			{ id: 3, name: "FireBase", img: firebase },
			{ id: 3, name: "Sanity", img: sanity },
		],
	},
];

export default data;
