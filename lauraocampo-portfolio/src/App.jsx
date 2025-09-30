import Clouds from "./assets/images/Illustrations/Wolk1.png";
import Navbar from "./components/Navbar.jsx";
import "./App.css";

function App() {
	return (
		<>
			<main>
				<Navbar />
				<div className="clouds">
					<img src={Clouds} alt="clouds" />
				</div>
			</main>
		</>
	);
}

export default App;
