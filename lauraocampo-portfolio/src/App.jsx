import Clouds from "./assets/images/Illustrations/Wolk1.png";
import Character from "./assets/images/Illustrations/Character.png";
import Navbar from "./components/Navbar.jsx";
import "./App.css";

function App() {
	return (
		<>
			<main>
				<Navbar />
				<div className="clouds">
					<img src={Clouds} alt="clouds" className="cloud" />
					<img src={Clouds} alt="clouds" className="cloud" />
					<img src={Clouds} alt="clouds" className="cloud" />
					<img src={Clouds} alt="clouds" className="cloud" />
					<img src={Clouds} alt="clouds" className="cloud" />
					<img src={Clouds} alt="clouds" className="cloud" />
				</div>
				<img src={Character} alt="character" className="character" />
			</main>
		</>
	);
}

export default App;
