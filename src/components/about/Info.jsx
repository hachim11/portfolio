import React from "react";

const Info = ({ data }) => {
	return (
		<div className="about_info grid">
			{data.map((item, index) => (
				<div className="about_box content" key={index}>
					<span className="about_icon">
						{item.icon === "dev" ? "💻" : "📷"}
					</span>
					<h3 className="about_title">{item.title}</h3>
					<span className="about_subtitle">{item.daily}</span>
				</div>
			))}
		</div>
	);
};

export default Info;
