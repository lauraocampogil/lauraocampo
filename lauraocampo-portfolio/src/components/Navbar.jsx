import Logo from "../assets/images/Favicon/Logo-LO-white.png";
import { navLinks } from "../../constants/index.js";
function Navbar() {
	return (
		<nav className="navbar">
			<div>
				<p>2025.</p>
				<a href="#home">
					<img src={Logo} alt="logo" className="logo" />
					<p>campo</p>
				</a>
				<ul>
					{navLinks.map((link) => (
						<li key={link.id}>
							<a href={link.id}>{link.name}</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
