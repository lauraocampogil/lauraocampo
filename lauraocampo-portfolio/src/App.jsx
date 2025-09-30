import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Clouds from "./assets/images/Illustrations/Wolk1.png";
import Character from "./assets/images/Illustrations/Character.png";
import Navbar from "./components/Navbar.jsx";
import "./App.css";

gsap.registerPlugin(Draggable, ScrollTrigger);

function App() {
	const cloudsRef = useRef([]);
	const heroTextRef = useRef(null);
	const heroSectionRef = useRef(null);

	useEffect(() => {
		// Hacer las nubes arrastrables
		cloudsRef.current.forEach((cloud) => {
			if (cloud) {
				Draggable.create(cloud, {
					type: "x,y",
					bounds: heroSectionRef.current,
					inertia: true,
				});
			}
		});

		// Animación de scroll dentro del hero
		ScrollTrigger.create({
			trigger: heroSectionRef.current,
			start: "top top",
			end: "bottom top",
			scrub: 1,
			onUpdate: (self) => {
				const progress = self.progress;

				// Nubes de la izquierda (índices 0, 1, 4) vuelan a la izquierda
				[0, 1, 4].forEach((index) => {
					if (cloudsRef.current[index]) {
						gsap.to(cloudsRef.current[index], {
							x: `-=${1000 * progress}`,
							duration: 0,
						});
					}
				});

				// Nubes de la derecha (índices 2, 3, 5) vuelan a la derecha
				[2, 3, 5].forEach((index) => {
					if (cloudsRef.current[index]) {
						gsap.to(cloudsRef.current[index], {
							x: `+=${1000 * progress}`,
							duration: 0,
						});
					}
				});

				if (heroTextRef.current) {
					let textOpacity = 0;

					// Texto aparece completamente negro entre 10% y 30% del scroll
					if (progress >= 0.1 && progress <= 0.3) {
						textOpacity = 1;
					} else if (progress < 0.1) {
						// Transición rápida de 0 a 1
						textOpacity = progress * 10;
					} else if (progress > 0.25) {
						// Cambia 0.3 por 0.25
						textOpacity = Math.max(1 - (progress - 0.25) * 3, 0);
					}

					gsap.to(heroTextRef.current, {
						opacity: textOpacity,
						scale: 1,
						duration: 0,
					});
				}
			},
		});

		return () => {
			ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
			Draggable.get(cloudsRef.current)?.forEach((draggable) => draggable?.kill());
		};
	}, []);

	return (
		<>
			<Navbar />
			<main ref={heroSectionRef}>
				<div className="hero-content">
					<div className="clouds">
						{/* Nubes izquierda */}
						<img ref={(el) => (cloudsRef.current[0] = el)} src={Clouds} alt="cloud" className="cloud cloud-1" />
						<img ref={(el) => (cloudsRef.current[1] = el)} src={Clouds} alt="cloud" className="cloud cloud-2" />

						{/* Nubes derecha */}
						<img ref={(el) => (cloudsRef.current[2] = el)} src={Clouds} alt="cloud" className="cloud cloud-3" />
						<img ref={(el) => (cloudsRef.current[3] = el)} src={Clouds} alt="cloud" className="cloud cloud-4" />

						{/* Nubes izquierda abajo */}
						<img ref={(el) => (cloudsRef.current[4] = el)} src={Clouds} alt="cloud" className="cloud cloud-5" />

						{/* Nubes derecha abajo */}
						<img ref={(el) => (cloudsRef.current[5] = el)} src={Clouds} alt="cloud" className="cloud cloud-6" />
					</div>

					<div ref={heroTextRef} className="hero-text">
						<p className="hero-subtitle">Front-end & Mobile app</p>
						<h1 className="hero-title">
							Developer
							<br />
							<span>&</span>
							<br />
							Designer
						</h1>
					</div>

					<img src={Character} alt="character" className="character" />
				</div>
			</main>
		</>
	);
}

export default App;
