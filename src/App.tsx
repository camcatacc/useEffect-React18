import { Link } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Link to="console" />
			<Link to="regular-image-fetching" />
			<Link to="react-query-image-fetching" />
		</div>
	);
}

export default App;
