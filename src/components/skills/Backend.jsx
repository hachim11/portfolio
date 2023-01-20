import React from "react";


const Backend = ({ data }) => {
	return (
		<div className="skills_content">
			<h3 className="skills_title content">Back-end</h3>
			<div className="div" />
			<div className="skills_group content">
				{data.map((i) => (
					<div className="skills_data" key={i.id}>
						<div>
							<img src={i.img} alt="t" />
							<h3 className="skills_name">{i.name}</h3>
					</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Backend;
