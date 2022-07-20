import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<div className="App">
			<h1>useEffect Demo</h1>
			<nav className="linksContainer">
				<Link to="/">Console</Link>
				<Link to="regular-image-fetching">Regular image fetching</Link>
				<Link to="react-query-image-fetching">React Query Image Fetching</Link>
			</nav>
			<Outlet />
		</div>
	);
}

export default App;
