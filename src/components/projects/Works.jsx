import { AiFillEye, AiFillGithub } from "react-icons/ai";


const Works = ({ filterWork }) => {
	
	return (
		<div className="projects_works">
			{filterWork.map((work, index) => (
				<div className="projects_works-item" key={index}>
					<div className="works-img ">
						<img src={work.img} alt={work.title} />

						<div className="works-link">
							<a href={work.projectLink} target="_blank" rel="noreferrer">
								<div className="flex">
									<AiFillEye />
								</div>
							</a>
							{work.codeLink && (
								<a href={work.codeLink} rel="noreferrer">
									<div className="flex">
										<AiFillGithub />
									</div>
								</a>
							)}
						</div>
					</div>

					<div className="works-content">
						<p className="works-title">{work.title}</p>
						<p className="works-desc" style={{ marginTop: 10 }}>
							{work.description}
						</p>

						{/* <div className="works-tag ">
                    <p className="works.tag-title">{work.tags}</p>
                </div> */}
					</div>
				</div>
			))}
		</div>
	);
};

export default Works;
