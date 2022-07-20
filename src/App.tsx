import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<div className="App">
			<div className="body">
				<h1>useEffect Demo</h1>
				<nav className="linksContainer">
					<Link to="/">Console</Link>
					<Link to="regular-image-fetching">Regular image fetching</Link>
					<Link to="react-query-image-fetching">React Query Image Fetching</Link>
				</nav>
				<Outlet />
			</div>
			<footer>
				<p>
					<b>
						This website has been developed as a complement to a{" "}
						<a href="https://blog.accenture.com/fefsatcspain/" target="_blank" rel="noreferrer">
							blog article
						</a>{" "}
						explaining useEffect from React 18 onwards.
					</b>
					<br />
					<i>It is being run in development mode so that the effects of React.StrictMode and debuggers can be seen.</i>
				</p>
				<hr />
				<p>
					Developed by <b>David Camacho</b>
				</p>
			</footer>
		</div>
	);
}

export default App;
