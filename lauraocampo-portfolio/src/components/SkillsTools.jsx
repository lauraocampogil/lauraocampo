function SkillsTools() {
	const developerSkills = {
		frontend: ["HTML", "CSS", "Javascript", "Swift", "Vue", "React"],
		backend: ["Python", "Kotlin"],
	};

	const designerSkills = {
		softwares: ["Photoshop", "Illustrator", "Indesign", "Adobe XD", "Figma"],
		marketing: ["Analytics", "Hotjar", "SEO"],
	};

	return (
		<section id="skills" className="skills-section">
			<h2 className="skills-main-title">Skills & Tools</h2>

			<div className="skills-container">
				{/* Developer Column */}
				<div className="skills-column">
					<h3 className="column-title">DEVELOPER</h3>

					<div className="skills-card">
						<h4 className="card-title">Front-end</h4>
						<div className="skills-tags">
							{developerSkills.frontend.map((skill, index) => (
								<span key={index} className="skill-tag">
									{skill}
								</span>
							))}
						</div>

						<h4 className="card-title">Back-end</h4>
						<div className="skills-tags">
							{developerSkills.backend.map((skill, index) => (
								<span key={index} className="skill-tag">
									{skill}
								</span>
							))}
						</div>
					</div>
				</div>

				{/* Designer Column */}
				<div className="skills-column">
					<h3 className="column-title">DESIGNER</h3>

					<div className="skills-card">
						<h4 className="card-title">Softwares</h4>
						<div className="skills-tags">
							{designerSkills.softwares.map((skill, index) => (
								<span key={index} className="skill-tag">
									{skill}
								</span>
							))}
						</div>

						<h4 className="card-title">Marketing Tools</h4>
						<div className="skills-tags">
							{designerSkills.marketing.map((skill, index) => (
								<span key={index} className="skill-tag">
									{skill}
								</span>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default SkillsTools;
