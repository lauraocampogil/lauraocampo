import Head from "../assets/images/Illustrations/Hoofd-mannequin.png";

function AboutMe() {
	return (
		<section id="about" className="about-section">
			<div className="about-container">
				<div className="about-left">
					<h2 className="about-title">About Me</h2>
					<div className="about-image">
						<img src={Head} alt="head" className="head" />
					</div>
				</div>

				<div className="about-right">
					<div className="about-tags">
						<span className="tag">Web design & developer</span>
						<span className="tag">App design & developer</span>
					</div>

					<p className="about-text">
						Hi! My name is <strong>Laura Ocampo</strong> and I study Multimedia & Creative Technology at ErasmusHogeschool. I can speak 3 languages fluently. I speak Spanish, French and Dutch and I also can speak English B1 level.
					</p>

					<p className="about-text">
						When I'm not designing or coding, you'll likely find me on the football field, where teamwork and strategy are as essential as they are in tech. My curious spirit pushes me to constantly learn and experiment, whether it's a new design
						tool, a coding language, or ways to make an impact with my work.
					</p>

					<a href="#contact">
						<button className="contact-button">Contact me</button>
					</a>
				</div>
			</div>
		</section>
	);
}

export default AboutMe;
